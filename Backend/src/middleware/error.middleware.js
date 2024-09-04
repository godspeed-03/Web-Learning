import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const errorHandler = ( err, req, res, next ) => {
  if ( err instanceof ApiError ) {
    return res.status( err.statusCode ).json(
      new ApiResponse( err.statusCode, null, err.message )      
    );
  }

  // Handle unknown errors
  res.status( 500 ).json(
    new ApiResponse( 500, null, err.message )
  );
};

export default errorHandler;
