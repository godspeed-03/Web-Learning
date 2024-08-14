import http, { createServer } from 'http';
import { hostname } from 'os';

const localhost = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world !');
    })

    server.listen(port, hostname, () => {
        console.log(`listing to the port ${port}`);
        
    })