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
      <Link to="/" id="BackButtonUser">
        <FaChevronLeft />
        Back to search
      </Link>
      {!loading && data ? (
        <div id="UserDetails">
          <div className="LeftPanel">
            {name ? <h2>{name}</h2> : <h2>{login}</h2>}
            {name ? <p>({login})</p> : null}
            <img
              src={avatar_url}
              alt={login}
              className="avatar"
              style={{ height: "10rem", width: "10rem" }}
            />
          </div>

          <div className="RightPanel">
            <p>
              <b>Hireable:</b>{" "}
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
            <div id="userinfo-button-container">
              <a href={html_url} style={{ color: "#fff" }}>
                View Profile
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
