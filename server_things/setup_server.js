const { port } = require('../constants/server_constant');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

function startServer() {
    app.use(bodyParser.json());
    app.listen(port, () => {
        console.log(`Server is listening at ${port}`);
    });
}

module.exports = {
    app, startServer
};