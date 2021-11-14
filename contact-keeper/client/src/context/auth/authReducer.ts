import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../actions";

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    case REGISTER_FAIL:
      return {
        ...state,
      };
    case USER_LOADED:
      return {
        ...state,
      };
    case AUTH_ERROR:
      return {
        ...state,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    case LOGOUT:
      return {
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
