import { createContext } from "react";

export interface AlertData {
  msg: string;
  type: string;
  timeout?: number;
  id: string;
}

export interface IAlert {
  alerts: AlertData;
  setAlert: Function;
}

export const initialAlert: AlertData = {
  msg: "",
  type: "",
  timeout: 5000,
  id: "",
};

export const GlobalAlert: IAlert = {
  alerts: initialAlert,
  setAlert: Function,
};

export const AlertContext = createContext<IAlert>(GlobalAlert);
