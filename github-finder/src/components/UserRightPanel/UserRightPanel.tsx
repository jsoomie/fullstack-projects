import { InterData } from "../../pages/UserDetails";
import { FaCheck, FaTimesCircle } from "react-icons/fa";

export const UserRightPanel = ({
  hireable,
  company,
  bio,
  blog,
  location,
  html_url,
}: InterData) => {
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
        <a href={html_url} style={{ color: "#fff" }}>
          Visit Github Profile
        </a>
      </div>
    </div>
  );
};
