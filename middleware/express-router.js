'use strict';
const express = require('express');
const router  = express.Router();
const { auth } = require('./auth');
const approuter = require('../api/router');

module.exports = (app) => {
    router.get("/", (req, res) => {
        return res.send("Server Working... ");
    })
    app.use("/api/v2", auth, approuter);
}