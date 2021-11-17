import "./Alert.css";
import { FaExclamationCircle } from "react-icons/fa";
import { useContext, Fragment } from "react";
import { AlertContext } from "../../context";

export const Alert = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <Fragment>
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} id="AlertContainer">
            <p className={`AlertMessage ${alert.type}`}>
              <FaExclamationCircle />
              {alert.msg}
            </p>
          </div>
        ))}
    </Fragment>
  );
};
