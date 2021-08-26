import axios from "axios";
import {
  ALL_ROOMS_FAILED,
  ALL_ROOMS_SUCCESS,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAILED,
  CLEAR_ERRORS,
} from "../constants/RoomConstants";
import absoluteUrl from "next-absolute-url";

// Server side props provides ctx which will provide access to req object which in turn is required here 
// for server side rendering of page so that req made to which URL can be defined completely 
// i.e. http://localhost:8080/api/rooms
// useEffect in react will nor pre render the page so to pre render data complete url is required.

export const getRooms = (req) => async(dispatch) => {
  try {
    const {origin} = absoluteUrl(req)
    const {data} = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ALL_ROOMS_FAILED,
      payload: err.response.data.message
    })
  }
};

export const getRoomDetails = (req, id) => async(dispatch) => {
  try {
    const {origin} = absoluteUrl(req)
    const {data} = await axios.get(`${origin}/api/rooms/${id}`);
    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data.room
    })
  } catch (err) {
    dispatch({
      type: ROOM_DETAILS_FAILED,
      payload: err.response.data.message
    })
  }
};

// Clear error if any
export const clearError = () => (dispatch) =>{
  dispatch({
    type: CLEAR_ERRORS,
  })
}
