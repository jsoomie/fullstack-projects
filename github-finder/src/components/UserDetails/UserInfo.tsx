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
  const {
    login,
    name,
    avatar_url,
    html_url,
    hireable,
    bio,
    blog,
    followers,
    following,
    location,
    public_gists,
    public_repos,
  } = data;

  return (
    <Fragment>
      {!loading && data ? (
        <div id="UserDetails">
          <Link to="/">
            <FaChevronLeft />
            Back to search
          </Link>
          <div className="card">
            {name ? (
              <h2>
                {name} ({login})
              </h2>
            ) : (
              <h2>{login}</h2>
            )}
            <img
              src={avatar_url}
              alt={login}
              className="avatar"
              style={{ height: "10rem", width: "10rem" }}
            />
            <p>
              Hireable:{" "}
              {hireable ? (
                <FaCheck style={{ color: "green" }} />
              ) : (
                <FaTimesCircle style={{ color: "red" }} />
              )}{" "}
            </p>
            {bio ? <p>Bio: {bio}</p> : null}
            {blog ? <p>Blog: {blog}</p> : null}
            {followers ? <p>Followers: {followers}</p> : null}
            {following ? <p>Following: {following}</p> : null}
            {location ? <p>Location: {location}</p> : null}
            {public_gists ? <p>Public Gists: {public_gists}</p> : null}
            {public_repos ? <p>Public Repos: {public_repos}</p> : null}
            <a href={html_url} className="button" style={{ color: "#fff" }}>
              View Profile
            </a>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
