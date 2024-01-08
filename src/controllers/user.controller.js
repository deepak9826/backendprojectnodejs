import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.models.js";
// import {  } from "mongoose";
const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const {fullName, email, username, password } = req.body
    console.log("email: ", email);
    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser=User.findOne({
        $or:[{ email } ,{ username } ]
    })
    if(existedUser){
        throw new ApiError(409,"User with email and username already exists..")
    }

    console.log(req.files);    
    const avatarLocalPath = req.files?.avatar[0]?.path;

})
export {registerUser}
