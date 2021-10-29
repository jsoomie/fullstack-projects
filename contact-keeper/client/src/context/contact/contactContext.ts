import { createContext } from "react";
import { IContact, initialState } from "./contactReducer";

export const contactContext = createContext<IContact>(initialState);
