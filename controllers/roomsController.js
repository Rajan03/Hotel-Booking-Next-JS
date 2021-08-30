import Room from "../models/Rooms";
import HandleError from "../utils/errorHandler";
import catchAsyncError from "../middlewares/handleAsyncError";
import APIFeatures from "../utils/apiFeatures";

//  GET - api/rooms
// @desc- Get request for fetching all rooms.

const allRooms = catchAsyncError(async (req, res) => {
  const countPerPage = 5;
  const roomsCount = await Room.countDocuments();

  const apiFeature = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeature.query;
  const filteredRooms = rooms.length;

  console.log(rooms)
  apiFeature.pagination(countPerPage);
  rooms = await apiFeature.query;

  res.status(200).json({
    success: true,
    roomsCount,
    countPerPage,
    filteredRooms,
    rooms,
  });
});

//  GET - api/rooms/:id
// @desc- Get request for fetching single room.

const singleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new HandleError("No Room Found!!", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

//  POST - api/rooms
// @desc- Post request for adding rooms.

const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

//  UPDATE - api/rooms/:id
// @desc- Update request for updating a room.

const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new HandleError("Room Update Failed!!", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    room,
  });
});

//  DELETE - api/rooms/:id
// @desc- Delete request for deleting a room.

const deleteRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new HandleError("Error in deleting Room!!", 404));
  }

  room = await Room.remove();
  res.status(200).json({
    success: true,
    message: "Room Deleted!!",
  });
});

export { allRooms, newRoom, singleRoom, updateRoom, deleteRoom };
