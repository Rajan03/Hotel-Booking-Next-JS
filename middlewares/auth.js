import catchAsyncError from "./handleAsyncError";
import HandleError from "../utils/errorHandler"
import { getSession } from "next-auth/client";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return next(new HandleError("Login to access this resource!!", 401));
  }
  
  req.user = session.user;
  next();
});
