import { useEffect, useContext, useState } from "react";
import { SingleRepo, Spinner } from "..";
import { useParams } from "react-router";
import { githubContext } from "../../context";
import "./UserRepos.css";

export const UserRepos = () => {
  const { getRepos, repos } = useContext(githubContext);
  const { id: username } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const res = await getRepos(username);
      if (res) setLoading(false);
    };
    fetch();
    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

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
