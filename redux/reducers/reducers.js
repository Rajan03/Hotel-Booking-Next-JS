import { combineReducers } from "redux";
import { roomsReducer, roomDetailsReducer } from "./roomReducers";
import { authReducer } from "./userReducer";

export const reducers = combineReducers({
  allRooms: roomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
});
