import {
  ALL_ROOMS_FAILED,
  ALL_ROOMS_SUCCESS,
  ROOM_DETAILS_FAILED,
  ROOM_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

//  ALL ROOMS REDUCERS
export const roomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.countPerPage,
        filteredRoomsCount: action.payload.filteredRooms,
        rooms: action.payload.rooms,
      };
    case ALL_ROOMS_FAILED:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//  ALL ROOMS REDUCERS
export const roomDetailsReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case ROOM_DETAILS_FAILED:
      return {
        error: action.payload,
      };
    case ROOM_DETAILS_SUCCESS:
      return {
        room: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
