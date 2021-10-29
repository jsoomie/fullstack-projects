import { createContext } from "react";
import { initialState } from "./contactReducer";

export const contactContext = createContext<typeof initialState>(initialState);
