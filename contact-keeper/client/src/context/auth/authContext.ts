import { createContext } from "react";

export interface IAuth {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: { msg: string };
}

export const GlobalAuth: IAuth = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  error: { msg: "" },
};

export const AuthContext = createContext<IAuth>(GlobalAuth);
