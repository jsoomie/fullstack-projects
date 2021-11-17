import "./Alert.css";
import { FaExclamationCircle } from "react-icons/fa";

export const Alert = () => {
  return (
    <div id="AlertContainer">
      <p className="AlertMessage">
        <FaExclamationCircle />
        Alert!
      </p>
    </div>
  );
};
