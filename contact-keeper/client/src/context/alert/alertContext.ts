import { createContext } from "react";

export interface IAlert {
  alerts: [];
  setAlert: Function;
}

export const GlobalAlert: IAlert = {
  alerts: [],
  setAlert: Function,
};

export const AlertContext = createContext<IAlert>(GlobalAlert);
