import { Router } from "express";
import { login, logout, register } from "../controllers/user-register.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/verifyJWT.middleware.js";
import downloadUsers from "../controllers/downloaduser.js";

const router = Router();

router.route( "/register" ).post(
  upload.fields( [
    {
      name: "avatar",
      maxCount: 1
    }, 
    {
      name: "coverImage",
      maxCount: 1
    }
  ] ),
  register
);

router.route( "/login" ).post(
  login
);

router.route( "/logout" ).post( 
  verifyJWT, 
  logout

);

router.route('/down').get(downloadUsers)

export default router;
