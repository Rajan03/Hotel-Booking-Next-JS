import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  CLEAR_ERRORS,
} from "../constants/userConstants";

//  Register User
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST});
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };
    const { data } = await axios.post("/api/auth/register", userData, config);
    
    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAILED,
      payload: err.response.data.message,
    });
  }
};

// Clear error if any
export const clearError = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
