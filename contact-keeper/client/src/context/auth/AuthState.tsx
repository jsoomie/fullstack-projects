import { AuthContext, GlobalAuth } from "./authContext";
import { authReducer } from "./authReducer";
import { useReducer } from "react";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../actions";

type ChildProps = {
  children?: JSX.Element;
};
export const AuthState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, GlobalAuth);

  // load user

  // register user

  // login user

  // logout

  // clear errors

  return (
    <AuthContext.Provider
      value={{
        token: localStorage.getItem("token"),
        isAuthenticated: false,
        loading: true,
        error: { msg: "" },
        user: "",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
