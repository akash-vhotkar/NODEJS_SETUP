require('module-alias/register')
const express = require('express');
const mongoose = require('@lib/mongoose').connect();

const http = require('http');
const PORT = process.env.PORT || 9000;

module.exports = (app) => {
    function listen() {
        const server = http.createServer(app);
        server.listen(PORT)
        logger.info('Server is working on port ', PORT);
        console.log(`Server running on port  ${PORT}`);
    }
    listen();

}