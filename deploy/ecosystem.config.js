// PM2 ecosystem config — manages both sites as background services
// Paths use $HOME so they work for any user
const os = require('os');
const path = require('path');
const home = os.homedir();

module.exports = {
  apps: [
    {
      name: 'gradys',
      cwd: path.join(home, 'GRADYSPHWS'),
      script: 'node_modules/.bin/next',
      args: 'start --port 3001',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
    {
      name: 'calculus',
      cwd: path.join(home, 'calculus'),
      script: 'node_modules/.bin/next',
      args: 'start --port 3000',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
