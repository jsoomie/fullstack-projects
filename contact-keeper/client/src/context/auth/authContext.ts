import { createContext } from "react";

export interface IAuth {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: { msg: string };
  user: unknown;
}

export const GlobalAuth: IAuth = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  error: { msg: "" },
  user: "",
};

export const AuthContext = createContext<IAuth>(GlobalAuth);
