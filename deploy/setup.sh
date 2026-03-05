#!/bin/bash
set -e

##############################################
# Deployment script for calculus-web GCP VM
# Run this ON the VM itself (as user crypticassassin)
# Sets up nginx + PM2 to serve:
#   /          → Grady's Public House (port 3001)
#   /calculus  → Calculus site        (port 3000)
##############################################

REPO_URL="https://github.com/financecommander/GRADYSPHWS.git"
GRADYS_DIR="$HOME/GRADYSPHWS"
CALCULUS_DIR="$HOME/calculus"

echo "=== Step 1: Install Node.js, nginx, PM2 ==="
# Install Node.js 20 if not present
if ! command -v node &>/dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi
sudo apt update
sudo apt install -y nginx git
sudo npm install -g pm2

echo "=== Step 2: Clone/pull Grady's site ==="
if [ -d "$GRADYS_DIR" ]; then
    cd "$GRADYS_DIR" && git pull
else
    git clone "$REPO_URL" "$GRADYS_DIR"
fi

echo "=== Step 3: Build Grady's site ==="
cd "$GRADYS_DIR"
npm install
npm run build

echo "=== Step 4: Deploy nginx config ==="
sudo cp "$GRADYS_DIR/deploy/nginx.conf" /etc/nginx/sites-available/gradys-calculus
sudo ln -sf /etc/nginx/sites-available/gradys-calculus /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

echo "=== Step 5: Start apps with PM2 ==="
pm2 delete all 2>/dev/null || true
pm2 start "$GRADYS_DIR/deploy/ecosystem.config.js"
pm2 save

# Auto-start PM2 on boot
PM2_STARTUP=$(pm2 startup systemd -u $(whoami) --hp $HOME 2>&1 | grep 'sudo' | head -1)
if [ -n "$PM2_STARTUP" ]; then
    eval $PM2_STARTUP
fi

echo ""
echo "=== DONE ==="
echo "Grady's:   http://34.148.8.51/"
echo "Calculus:  http://34.148.8.51/calculus"
echo ""
echo "Useful commands:"
echo "  pm2 status       — check running apps"
echo "  pm2 logs gradys  — view Grady's logs"
echo "  pm2 restart all  — restart both apps"
