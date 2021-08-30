import User from "../models/User";
import HandleError from "../utils/errorHandler";
import catchAsyncError from "../middlewares/handleAsyncError";
import APIFeatures from "../utils/apiFeatures";

//  GET - api/auth/register
// @desc- Get request for fetching all rooms.

const registerUser = catchAsyncError(async (req, res) => {
  const {name, email, password} = req.body;

  const user = await User.create({
      name, email, password, avatar: {
          public_id: 'PUBLIC_KEY',
          url: 'URL'
      }
  });
  res.status(200).json({
      success: true,
      message: 'Registration Successfull!!'
  })
});

export { registerUser};
