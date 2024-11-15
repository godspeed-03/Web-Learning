import { Router } from "express";
import {  emailsend, serverfunctin } from "./email.js";


const router = Router()

router.route('/').get( serverfunctin)
router.route('/send').get(emailsend)

export default router