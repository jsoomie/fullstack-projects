import { createContext, useReducer } from "react";
import { IAuthState, IChild } from "interfaces";
import { authReducer } from "./authReducer";

const initAuth: IAuthState = {
  user: null,
  dispatch: undefined,
};

export const AuthContext = createContext(initAuth);

export const AuthContextProvider = ({ children }: IChild) => {
  const [state, dispatch] = useReducer(authReducer, initAuth);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
