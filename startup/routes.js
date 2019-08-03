const express = require('express');
const morgan = require('morgan');
const auth = require('../routes/auth');
const user = require('../routes/users');
const state = require('../routes/states');


module.exports = function (app) {
    app.use(morgan('tiny'));
    app.use(express.json());
    app.use('/api/auth', auth);
    app.use('/api/user', user);
    app.use('/api/state', state);
}