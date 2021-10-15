import { Spinner } from "../index";
import { Fragment } from "react";
import { FaCheck, FaTimesCircle, FaChevronLeft } from "react-icons/fa";
import { InterData } from "../../pages/UserDetails";
import { Link } from "react-router-dom";
import "./UserInfo.css";

interface UserInfoProps {
  data: InterData;
  loading: boolean;
}

export const UserInfo = ({ loading, data }: UserInfoProps) => {
  return (
    <Fragment>
      {!loading && data ? (
        <div id="UserDetails">
          <Link to="/">
            <FaChevronLeft />
            Back to search
          </Link>
          <div className="card">
            {data.name ? (
              <h2>
                {data.name} ({data.login})
              </h2>
            ) : (
              <h2>{data.login}</h2>
            )}
            <img
              src={data.avatar_url}
              alt={data.login}
              className="avatar"
              style={{ height: "10rem", width: "10rem" }}
            />
            <p>
              Hireable:{" "}
              {data.hireable ? (
                <FaCheck style={{ color: "green" }} />
              ) : (
                <FaTimesCircle style={{ color: "red" }} />
              )}{" "}
            </p>
            {data.bio && <p>{data.bio}</p>}
            <p>Blog: {data.blog}</p>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p>{data.location}</p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
