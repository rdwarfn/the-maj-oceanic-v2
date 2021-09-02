module.exports = {
  apps: [
    {
      name: 'TMO',
      instances: 1,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        PORT: 3002,
        NODE_ENV: 'production',
        NODE_TLS_REJECT_UNAUTHORIZED: 0,
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_TLS_REJECT_UNAUTHORIZED: 0,
      }
    }
  ]
}
