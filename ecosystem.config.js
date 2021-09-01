module.exports = {
  apps: [
    {
      name: 'Oceanic',
      exec_mode: 'cluster',
      instances: 1, // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        "PORT": 3001,
	"NODE_ENV": "production"
      }
    }
  ]
}
