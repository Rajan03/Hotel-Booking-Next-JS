import nc from "next-connect";
import connectDb from "../../config/db"
import errorResponse from "../../middlewares/error";
import {currentUserProfile} from "../../controllers/authController"
import { isAuthenticated } from "../../middlewares/auth";

const handler = nc({ errorResponse });

connectDb();

handler.use(isAuthenticated).get(currentUserProfile);

export default handler;
