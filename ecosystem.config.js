module.exports = {
    apps: [{
        name: "server",
        script: "npx",
        interpreter:'none',
        args : 'node api/server.js',
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }]
  }
  