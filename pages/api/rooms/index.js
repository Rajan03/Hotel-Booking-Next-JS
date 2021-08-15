import nc from "next-connect";
import connectDb from "../../../config/db";
import { allRooms, newRoom } from "../../../controllers/roomsController";
import errorResponse from "../../../middlewares/error";

const handler = nc({ errorResponse });

connectDb();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
