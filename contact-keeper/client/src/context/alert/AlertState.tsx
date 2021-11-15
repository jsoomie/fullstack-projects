import { useReducer } from "react";
import { AlertContext, GlobalAlert } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../actions";

type ChildProps = {
  children?: JSX.Element;
};
export const AlertState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(alertReducer, GlobalAlert);

  // Set Alert
  const setAlert = (msg: string, type: string) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
  };

  return (
    <AlertContext.Provider
      value={{
        msg: "",
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
