const next = require('next');
// const routes = require('./routes');
// const routes = require('next-routes');
const port = parseInt(process.env.PORT, 10) || 3006;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const express = require("express");


const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(handler);

    server.get('*', (req, res) => {
        return handle(req, res);

    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
});
