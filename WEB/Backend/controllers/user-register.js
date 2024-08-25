import { User } from "../models/userModel.js";

 export const register = async(req, res) =>{
const {username, fullName, email, password  } =req.body;
console.log(email)

//validate
//uniqueness usrname, email
// check cove avatar img
//upload to cloudinary

const newUser = new User ({
    username : username,
    email : email,
    fullName: fullName,
    password : password
})

newUser.save();


res.status(200).json({
    message : "okk",
})

}