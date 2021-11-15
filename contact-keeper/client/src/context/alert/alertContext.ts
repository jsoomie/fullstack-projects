import { createContext } from "react";

export interface IAlert {
  msg: string;
  setAlert: Function;
}

export const GlobalAlert: IAlert = {
  msg: "Error",
  setAlert: Function,
};

export const AlertContext = createContext<IAlert>(GlobalAlert);
