import { AuthContext, GlobalAuth } from "./authContext";
import { authReducer } from "./authReducer";
import { useReducer } from "react";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // USER_LOADED,
  // AUTH_ERROR,
  // LOGIN_FAIL,
  // LOGOUT,
  // CLEAR_ERRORS,
} from "context";
import axios from "axios";

type ChildProps = {
  children?: JSX.Element;
};
export const AuthState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, GlobalAuth);

  // load user

  // register user
  const register = async (formData: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({
          type: REGISTER_FAIL,
          payload: error.message,
        });
      }
      console.error(error);
    }
  };

  // login user

  // logout

  // clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
