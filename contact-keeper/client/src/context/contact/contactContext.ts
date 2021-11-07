import { createContext } from "react";
import { IState } from "./contactReducer";
import { GlobalUser } from "../contact/contactState";

export const contactContext = createContext<IState>(GlobalUser);
