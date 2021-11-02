import { createContext } from "react";
import { IState } from "..";
import { GlobalUser } from "./contactReducer";

export const contactContext = createContext<IState>(GlobalUser);
