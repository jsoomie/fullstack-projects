import { FaInfoCircle } from "react-icons/fa";
import { Fragment, useContext } from "react";
import "./Alert.css";

import { alertContext } from "../../../context";

export const Alert = () => {
  const { alert } = useContext(alertContext);

  return (
    <Fragment>
      {alert.show && (
        <div id="Alert-Container" className={`${alert.type}`}>
          <FaInfoCircle /> {alert.msg}
        </div>
      )}
    </Fragment>
  );
};
