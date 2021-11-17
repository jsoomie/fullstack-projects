import { createContext } from "react";

export interface IAlertData {
  msg: string;
  type: string;
  timeout: number;
  id: string;
}

export interface IAlert {
  alerts: IAlertData[];
  setAlert: Function;
}

export const initalALert: IAlert = {
  alerts: [],
  setAlert: Function,
};

export const AlertContext = createContext(initalALert);
