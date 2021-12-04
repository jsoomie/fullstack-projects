import { createContext, useEffect, useReducer } from "react";
import { IAuthState, IChild } from "interfaces";
import { authReducer } from "./authReducer";
import { auth } from "firebase";
import { Actions } from "actions";

const initAuth: IAuthState = {
  user: null,
  dispatch: undefined,
  authIsReady: false,
};

export const AuthContext = createContext(initAuth);

export const AuthContextProvider = ({ children }: IChild) => {
  const [state, dispatch] = useReducer(authReducer, initAuth);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      dispatch({ type: Actions.AUTH_READY, payload: user });
      unsub();
    });
  }, []);

  console.log("AuthContext state: ", state.user);

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
