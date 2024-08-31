import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";

export const verifyJWT = async( req, res, next )=>{

  const token = req.cookies.accesstoken || req.header( "Authorization" ).replace( "Bearer ", "" );

  if( !token ) {
    throw new ApiError( 401, "Unauthorized request" );
  }

  const decodedInfo = jwt.verify( token, process.env.ACCESS_TOKEN_SECRET );

  const user = await User.findById( decodedInfo._id ).select( "-password -refreshToken" );

  console.log( user );

  if( !user ) {
    throw new ApiError( 404, "Invalid access token" );
  }

  req.user = user;
  next();

};
