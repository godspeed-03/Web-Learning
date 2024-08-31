import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use( cors() );
app.use( cookieParser() );
app.use( express.json( { limit: "16kb" } ) );
app.use( express.urlencoded( {
  extended: true,
  limit: "16kb"
} ) );

// (err, req, res, next)

// import routes

import router from "./src/routes/user.routes.js";
import errorHandler from "./src/middleware/error.middleware.js";

app.use( "/api/v1/user", router );

app.use( errorHandler );

export default app;
