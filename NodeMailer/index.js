import express from 'express';
import cors from "cors";

const app = express()

app.use(cors() )
app.use(express.json({ limit:"16kb"}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb",
}))


import router from './route.js';
import { sendEmail } from './sendemail.js';
import { filepath } from './local/new/body/new.mjs';

app.use('/email', router)

app.listen(process.env.PORT, () =>(
    filepath(),
    console.log(`Server started on ${process.env.PORT}`)
))