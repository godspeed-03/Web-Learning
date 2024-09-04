import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config( { 
  cloud_name: process.env.CLOUDINARY_CLOUD, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
} );

export const fileuploadcontroller = async ( filepathname ) => {
  try {
    if ( !filepathname ) return null;

    const response = await cloudinary.uploader.upload(
      filepathname,
      {
        resource_type: "auto"
      }
    );
    
    console.log( "File uploaded successfully : ", response.original_filename, response.url );
    fs.unlinkSync( filepathname );
    
    return response;
  }catch( err ) {
    fs.unlinkSync( filepathname );
    console.log( `Unbale to uploadd the file to cloudinary : ${err}` );
  }
};
