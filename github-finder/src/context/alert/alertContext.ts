import { createContext } from "react";
import { initialState } from "./alertReducer";

export const alertContext = createContext<typeof initialState>(initialState);
