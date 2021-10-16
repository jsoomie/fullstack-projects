import { RepoRes } from "../UserRepos/UserRepos";

export const SingleRepo = ({ name, description, html_url }: RepoRes) => {
  return (
    <li>
      <a href={html_url}>
        <h3>{name}</h3>
        <p>{description ? description : "No description provided"}</p>
      </a>
    </li>
  );
};
