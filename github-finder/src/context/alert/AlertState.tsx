import { useReducer } from "react";
import { alertContext } from "./alertContext";
import { AlertReducer, initialState } from "./alertReducer";
import { ChildProps } from "../../interface";
import { REMOVE_ALERT, SET_ALERT } from "..";

export const AlertState = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg: string, type: string): void => {
    dispatch({
      type: SET_ALERT,
      payload: { alert: { msg, type, show: true } },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {children}
    </alertContext.Provider>
  );
};
