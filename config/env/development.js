module.exports = {
    appName: 'framework',
    db: 'mongodb://localhost/' + this.appName,
    server: {
        // mode: 'development', //can be 'development', 'production', or 'localProductionTest'
        port: 5000,
        basePath: '/framework'
    },
    sessionSecret: 'developmentSessionSecret'
}