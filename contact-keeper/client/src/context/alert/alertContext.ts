import { createContext } from "react";

export interface IAlert {
  msg: string;
}

export const GlobalAlert: IAlert = {
  msg: "Error",
};

export const AlertContext = createContext<IAlert>(GlobalAlert);
