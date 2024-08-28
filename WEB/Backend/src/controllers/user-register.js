import { User } from "../models/userModel.js"
import { ApiError } from "../utils/ApiError.js";
import { fileuploadcontroller } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const register = async (req, res) => {
    const { username, email, fullName, avatar, coverImage, password } = req.body;

    if ([username, email, fullName, password].some((fields) => (
        fields?.trim() === ""
    ))) {
        throw new ApiError(406, 'All fields are required')
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }],
    })

    if (existedUser) {
        throw new ApiError(409, "User already registered")
    }
console.log(req.files)
    const localAvatarPath = req.files?.avatar[0]?.path;
    const localCoverImagePath = req.files?.coverImage[0]?.path;

    if (!localAvatarPath) {
        throw new ApiError(406, "Avatar is required")
    }

    const avatarpath = await fileuploadcontroller(localAvatarPath)
    const coverImagepath = await fileuploadcontroller(localCoverImagePath)
    if (!avatarpath) {
        throw new ApiError(406, "Avatar is required")
    }

    const newUser = await User.create({
        username: username.toLowerCase(),
        email: email,
        fullName: fullName,
        avatar : avatarpath.url,
        coverImage : coverImagepath?.url || "",
        password: password
    })

const createduser = await User.findById(newUser._id).select(
    "-password -refreshToken"
)

if(!createduser){
    throw new ApiError(500, "Something went wrong while creating user")
}

res.status(201).json(
new ApiResponse(200, createduser, "User registered successfully")
)

}