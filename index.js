const { startServer } = require('./server_things/setup_server');
const { router } = require('./routes_things/routes');
const { app } = require('./server_things/setup_server');

startServer();

app.use(router);