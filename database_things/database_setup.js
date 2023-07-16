const mysql = require('mysql2');

const databaseConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Abingsshi12',
    database: 'todolist',
    connectionLimit: '10',
};

const pool = mysql.createPool(databaseConfig);

module.exports = {
    pool
};