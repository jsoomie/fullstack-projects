import { RepoData } from "../../interface";

export const SingleRepo = ({ name, description, html_url }: RepoData) => {
  return (
    <li>
      <a href={html_url}>
        <h3>{name}</h3>
        <p>{description ? description : "No description provided"}</p>
      </a>
    </li>
  );
};
