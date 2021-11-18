import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "context";
import { IAuth } from "./authContext";

type Action =
  | { type: typeof REGISTER_SUCCESS; payload: any } // TODO: fix type
  | { type: typeof REGISTER_FAIL; payload: string }
  | { type: typeof USER_LOADED }
  | { type: typeof AUTH_ERROR }
  | { type: typeof LOGIN_FAIL }
  | { type: typeof LOGOUT }
  | { type: typeof CLEAR_ERRORS };
export const authReducer = (state: IAuth, action: Action): IAuth => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
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
