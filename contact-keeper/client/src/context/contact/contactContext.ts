import { createContext } from "react";
import { GlobalUser, IState } from "./contactReducer";

export const contactContext = createContext<IState>(GlobalUser);
