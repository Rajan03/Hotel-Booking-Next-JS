import User from "../models/User";
import HandleError from "../utils/errorHandler";
import catchAsyncError from "../middlewares/handleAsyncError";
import APIFeatures from "../utils/apiFeatures";
import cloudinary from "cloudinary";

//  SETTING CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//  GET - api/auth/register
// @desc- Get request for fetching all rooms.
const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  // const response = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //   folder: "Hotel-Management-App/avatars",
  //   width: "150",
  //   crop: "scale",
  // });
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new HandleError("User Exists!!", 503));
  } else {
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "response.public_id",
        url: "response.secure_url",
      },
    });

    res.status(200).json({
      success: true,
      message: "Registration Successfull!!",
    });
  }
});

// GET - api/me
// @desc - Current user Profile
const currentUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export { registerUser, currentUserProfile };
