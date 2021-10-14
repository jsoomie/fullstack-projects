import { FaInfoCircle } from "react-icons/fa";
import { Fragment } from "react";
import "./Alert.css";

interface AlertProp {
  alert: {
    msg: string;
    type: string;
    showAlert: boolean;
  };
}

export const Alert = ({ alert }: AlertProp) => {
  return (
    <Fragment>
      {alert.showAlert && (
        <div id="Alert-Container" className={`${alert.type}`}>
          <FaInfoCircle /> {alert.msg}
        </div>
      )}
    </Fragment>
  );
};
