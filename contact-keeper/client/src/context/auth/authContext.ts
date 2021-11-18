import { createContext } from "react";

export interface IAuth {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: { msg: string };
  user: unknown; // TODO: Fix type
  register: Function;
}

export const GlobalAuth: IAuth = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  error: { msg: "" },
  user: "",
  register: Function,
};

export const AuthContext = createContext<IAuth>(GlobalAuth);
