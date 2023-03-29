module.exports = {
    apps: [
      {
        name: 'domoteka.front',
        exec_mode: 'cluster',
        instances: 3, // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        watch: true,
        env: {
          "PORT": 3002,
        }
      }
    ]
  }
