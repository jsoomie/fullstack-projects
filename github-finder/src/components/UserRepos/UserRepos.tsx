import { useState, useEffect } from "react";
import { Spinner, SingleRepo } from "..";
import { UserData, RepoData } from "../../interface";
import axios from "axios";
import "./UserRepos.css";

const CLIENT_ID = process.env.REACT_APP_GITHUB_ID;
const CLIENT_SECRET = process.env.REACT_APP_GITHUB_SECRET;

export const UserRepos = ({ login: username }: UserData) => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    setLoading(true);
    const URL = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const fetch = async () => {
      const res = await axios.get(URL);
      setRepos(res.data);
      setLoading(false);
    };
    fetch();
    // eslint-disable-next-line
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
