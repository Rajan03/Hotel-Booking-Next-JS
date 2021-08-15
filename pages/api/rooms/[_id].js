import nc from "next-connect";
import connectDb from "../../../config/db";
import {
  singleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomsController";

import errorResponse from "../../../middlewares/error";

const handler = nc({ errorResponse });

connectDb();

handler.get(singleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
