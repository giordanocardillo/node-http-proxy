module.exports = {
  apps : [{
    name: 'HTTP Proxy',
    script: 'index.js',
    instances: max,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
