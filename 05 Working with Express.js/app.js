const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next(); //allows request to continue to next middleware in line
});

app.use((req, res, next) => {
    console.log('in another middleware');
});

const server = http.createServer(app);

server.listen(3000);
