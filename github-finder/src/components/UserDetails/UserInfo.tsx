import { Spinner } from "../index";
import { FaCheck, FaTimesCircle } from "react-icons/fa";
import { InterData } from "../../pages/UserDetails";
import { Link } from "react-router-dom";
import "./UserInfo.css";

interface UserInfoProps {
  data: InterData;
  loading: boolean;
}

export const UserInfos = ({ loading, data }: UserInfoProps) => {
  return (
    <div id="UserDetails">
      {!loading && data ? (
        <div>
          <Link to="/">Back to search</Link>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} alt={data.login} className="avatar" />
          <p>
            Hireable:{" "}
            {data.hireable ? (
              <FaCheck style={{ color: "green" }} />
            ) : (
              <FaTimesCircle style={{ color: "red" }} />
            )}{" "}
          </p>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
