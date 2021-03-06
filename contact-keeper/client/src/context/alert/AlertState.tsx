import { useReducer } from "react";
import {
  REMOVE_ALERT,
  SET_ALERT,
  AlertContext,
  initialAlert,
  alertReducer,
} from "context";
import { v4 as uuid } from "uuid";

type ChildProps = {
  children: JSX.Element;
};

export const AlertState = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(alertReducer, initialAlert);
  const setAlert = (msg: string, type: string, timeout: number = 4000) => {
    let id = uuid();
    dispatch({ type: SET_ALERT, payload: { msg, type, id, timeout } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
