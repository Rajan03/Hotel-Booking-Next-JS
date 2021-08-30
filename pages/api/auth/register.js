import nc from "next-connect";
import connectDb from "../../../config/db";
import { registerUser } from "../../../controllers/authController";
import errorResponse from "../../../middlewares/error";

const handler = nc({ errorResponse });

connectDb();

handler.post(registerUser);

export default handler;
