import { useEffect, useContext } from "react";
import { SingleRepo } from "..";
import { useParams } from "react-router";
import { githubContext } from "../../context";
import "./UserRepos.css";

export const UserRepos = () => {
  const { getRepos, repos } = useContext(githubContext);
  const { id: username } = useParams<{ id: string }>();

  useEffect(() => {
    getRepos(username);
    //eslint-disable-next-line
  }, []);

  return (
    <ul id="RepoContainer">
      {repos ? (
        repos.map((repo) => <SingleRepo {...repo} key={repo.id} />)
      ) : (
        <li>No repos currenlty listed</li>
      )}
    </ul>
  );
};
