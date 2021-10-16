import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export const UserBackButton = () => {
  return (
    <Link to="/" id="BackButtonUser">
      <FaChevronLeft />
      Back to search
    </Link>
  );
};
