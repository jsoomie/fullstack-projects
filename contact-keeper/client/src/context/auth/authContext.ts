import { createContext } from "react";

export interface IAuth {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
  user: unknown; // TODO: Fix type
  register: Function;
  loadUser: Function;
  login: Function;
  logout: Function;
  clearErrors: Function;
}

export const GlobalAuth: IAuth = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  error: "",
  user: "",
  register: Function,
  loadUser: Function,
  login: Function,
  logout: Function,
  clearErrors: Function,
};

export const AuthContext = createContext<IAuth>(GlobalAuth);
