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
    company,
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
        <Fragment>
          <div id="UserDetails">
            <div className="LeftPanel">
              <img
                src={avatar_url}
                alt={login}
                className="avatar"
                style={{ height: "13rem", width: "13rem" }}
              />
              {name ? <h2>{name}</h2> : <h2>{login}</h2>}
              {name ? <p>({login})</p> : null}
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
              {company ? <p>Company: {company}</p> : null}
              {bio ? <p>Bio: {bio}</p> : null}
              {blog ? (
                <p>
                  Blog: <a href={blog}>{blog}</a>
                </p>
              ) : null}
              {location ? <p>Location: {location}</p> : null}
              <div id="userinfo-button-container">
                <a href={html_url} style={{ color: "#fff" }}>
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>

          <div className="BottomPanel">
            <ul>
              <li className="badge warning">Followers: {followers}</li>
              <li className="badge primary">Following: {following}</li>
              <li className="badge success">Public Repos: {public_repos}</li>
              <li className="badge dark">Public Gists: {public_gists}</li>
            </ul>
          </div>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
