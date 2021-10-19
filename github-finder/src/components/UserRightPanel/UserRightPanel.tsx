import { FaCheck, FaTimesCircle } from "react-icons/fa";
import { IPropsUserData } from "../../interface";

export const UserRightPanel = ({
  user: { hireable, company, bio, blog, location, html_url },
}: IPropsUserData) => {
  return (
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
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff" }}
        >
          Visit Github Profile
        </a>
      </div>
    </div>
  );
};
