#!/bin/bash
set -e

##############################################
# Remote deploy script — run from GCP Cloud Shell
# 1. Adds SSH key to calculus-web VM
# 2. Opens firewall port 80
# 3. SSHes in and runs setup.sh
##############################################

VM_NAME="calculus-web"
ZONE="us-east1-b"
PROJECT=$(gcloud config get-value project)

echo "=== Project: $PROJECT ==="
echo "=== VM: $VM_NAME ($ZONE) ==="
echo ""

# Step 1: Ensure firewall allows HTTP (port 80)
echo "=== Step 1: Open port 80 in firewall ==="
if gcloud compute firewall-rules describe allow-http --project="$PROJECT" &>/dev/null; then
    echo "Firewall rule 'allow-http' already exists."
else
    gcloud compute firewall-rules create allow-http \
        --project="$PROJECT" \
        --direction=INGRESS \
        --priority=1000 \
        --network=default \
        --action=ALLOW \
        --rules=tcp:80 \
        --source-ranges=0.0.0.0/0 \
        --target-tags=http-server \
        --description="Allow HTTP traffic on port 80"
    echo "Created firewall rule 'allow-http'."
fi

# Ensure VM has http-server tag
echo "Adding http-server tag to VM..."
gcloud compute instances add-tags "$VM_NAME" \
    --zone="$ZONE" \
    --tags=http-server 2>/dev/null || echo "(tag may already exist)"

# Step 2: SSH into VM and run setup
echo ""
echo "=== Step 2: SSH into VM and deploy ==="
gcloud compute ssh "$VM_NAME" --zone="$ZONE" --command='
    set -e

    REPO_URL="https://github.com/financecommander/GRADYSPHWS.git"
    GRADYS_DIR="$HOME/GRADYSPHWS"

    # Install Node.js if not present
    if ! command -v node &>/dev/null; then
        echo "Installing Node.js..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt install -y nodejs
    fi

    sudo apt update -y
    sudo apt install -y nginx git

    # Install PM2
    if ! command -v pm2 &>/dev/null; then
        sudo npm install -g pm2
    fi

    # Clone or pull Gradys repo
    if [ -d "$GRADYS_DIR" ]; then
        cd "$GRADYS_DIR" && git pull
    else
        git clone "$REPO_URL" "$GRADYS_DIR"
    fi

    # Build Gradys
    cd "$GRADYS_DIR"
    npm install
    npm run build

    # Deploy nginx config
    sudo cp "$GRADYS_DIR/deploy/nginx.conf" /etc/nginx/sites-available/gradys-calculus
    sudo ln -sf /etc/nginx/sites-available/gradys-calculus /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nginx -t
    sudo systemctl restart nginx
    sudo systemctl enable nginx

    # Start apps with PM2
    pm2 delete all 2>/dev/null || true
    pm2 start "$GRADYS_DIR/deploy/ecosystem.config.js"
    pm2 save

    # Auto-start on boot
    PM2_STARTUP=$(pm2 startup systemd -u $(whoami) --hp $HOME 2>&1 | grep "sudo" | head -1)
    if [ -n "$PM2_STARTUP" ]; then
        eval $PM2_STARTUP
    fi

    echo ""
    echo "=== DEPLOYMENT COMPLETE ==="
    pm2 status
'

echo ""
echo "=== ALL DONE ==="
echo "Grady's:   http://34.148.8.51/"
echo "Calculus:  http://34.148.8.51/calculus"
