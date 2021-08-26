import { combineReducers } from "redux";
import { roomsReducer, roomDetailsReducer } from "./roomReducers";

export const reducers = combineReducers({
  allRooms: roomsReducer,
  roomDetails: roomDetailsReducer,
});
