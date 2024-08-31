import { Router } from "express";
import { register } from "../controllers/user-register.js";
import { upload } from "../middleware/multer.js";

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

export default router;
