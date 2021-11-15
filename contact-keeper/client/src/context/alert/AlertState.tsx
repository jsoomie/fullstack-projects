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
  const setAlert = (msg: string, type: string, timeout = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
