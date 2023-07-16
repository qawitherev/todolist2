const express = require('express');
const router = express.Router();
const { routes } = require('../constants/routes_constants');
const { pool } = require('../database_things/database_setup');
const { queries } = require('../database_things/queries_statement');

router.get(routes.init, (req, res) => {
    res.send('this is the homepage');
});

router.get(routes.getAllTodo, (req, res) => {
    pool.query(queries.getAllTodo, (error, results) => {
        if (error) {
            console.log('Cannot get all todo', error);
            res.send(`Cannot get all todo with error: ${error}`);
            return;
        }
        res.send({
            status: 'ok', 
            results: results,
        });
    });
});

router.get(routes.getTodo, (req, res) => {
    const { id } = req.params;
    pool.query(queries.getTodo, [id], (error, results) => {
        if (error) {
            console.log(`Cannot get todo ${id} with error: ${error}`);
            res.send(`Cannot get todo ${id} with error: ${error}`);
            return;
        }
        res.send({
            status: 'ok',
            result: results
        })
    });
});


module.exports = {
    router
};