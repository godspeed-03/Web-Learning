// import http, { createServer } from 'http';
// import { hostname } from 'os';
const http = require( "http" );

const localhost = "127.0.0.1";

const port = 3000;

const server = http.createServer( ( req, res ) => {
  if ( req.url === "/" ) {
    res.statusCode=200;
    res.setHeader( "Content-Type", "text/plain" );
    res.end( "Hello, world !" );
  }
  if ( req.url === "/user" ) {
    res.statusCode=200;
    res.setHeader( "Content-Type", "text/plain" );
    res.end( "bas mai hi hu yaha " );
  }
} );

server.listen( port, localhost, () => {
  console.log( `listing to the port ${port}` );
        
} );
