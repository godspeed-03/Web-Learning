import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";
import { fileuploadcontroller } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateRefreshTokenAndAccessToken = async (userId) => {
  const user = await User.findById(userId);

  const generatedrefreshToken = user.generateRefreshToken();

  const generatedaccessToken = user.generateAccessToken();

  console.log(generatedrefreshToken, generatedaccessToken);

  user.refreshToken = generatedrefreshToken;
  await user.save({ validateBeforeSave: false });

  return { generatedrefreshToken, generatedaccessToken };
};

export const register = async (req, res, next) => {
  // try {
  const { username, email, fullName, avatar, coverImage, password } = req.body;

  if (
    [username, email, fullName, password].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(406, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User already registered");
  }
  console.log(req.files);

  const localAvatarPath = req.files?.avatar[0]?.path;

  const localCoverImagePath = req.files?.coverImage[0]?.path;

  if (!localAvatarPath) {
    throw new ApiError(406, "Avatar is required");
  }

  const avatarpath = await fileuploadcontroller(localAvatarPath);

  const coverImagepath = await fileuploadcontroller(localCoverImagePath);

  if (!avatarpath) {
    throw new ApiError(
      406,
      "Unable to upload Avatar on cloud, Please try again"
    );
  }

  const newUser = await User.create({
    username: username.toLowerCase(),
    email: email,
    fullName: fullName,
    avatar: avatarpath.url,
    coverImage: coverImagepath?.url || "",
    password: password,
  });

  const createduser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );

  if (!createduser) {
    throw new ApiError(500, "Something went wrong while creating user");
  }

  res
    .status(201)
    .json(new ApiResponse(200, createduser, "User registered successfully"));
  // } catch ( error ) {
  //   next( error );

  // }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    if (!(email && password)) {
      throw new ApiError(400, "Email and Password are required");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new ApiError(404, "User not found, Please sign up");
    }

    const correctPasword = await user.isPasswordCorrect(password);

    if (!correctPasword) {
      throw new ApiError(
        401,
        "Incorrect password, Please enter correct password"
      );
    }

    const { generatedrefreshToken, generatedaccessToken } =
      await generateRefreshTokenAndAccessToken(user._id);
    //here comes like user dont have any token bcz instscne was created before.
    // to overcome that we need to eihter update that user or
    // call a new server request let's call that

    const loggedInuser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .cookie("refreshToken", generatedrefreshToken, options)
      .cookie("accessToken", generatedaccessToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInuser,
            refreshToken: generatedrefreshToken,
            accessToken: generatedaccessToken,
          },
          "User logged in successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      {
        new: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged Out"));
  } catch (error) {
    next(error);
  }
};
