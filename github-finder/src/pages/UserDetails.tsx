import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { UserInfo } from "../components";

export interface InterData {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
  company: string;
}

export const UserDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<InterData>();
  const { id: username } = useParams<{ id: string }>();

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
      );
      setData(res.data);
    };
    fetch();
    setLoading(false);
  }, [username]);

  return (
    <Fragment>{data && <UserInfo loading={loading} data={data} />}</Fragment>
  );
};

// avatar_url: "https://avatars.githubusercontent.com/u/16438063?v=4"
// bio: "developer @ cover.com"
// blog: ""
// company: "cover.com"
// created_at: "2015-12-25T16:49:06Z"
// email: null
// events_url: "https://api.github.com/users/ted/events{/privacy}"
// followers: 17
// followers_url: "https://api.github.com/users/ted/followers"
// following: 8
// following_url: "https://api.github.com/users/ted/following{/other_user}"
// gists_url: "https://api.github.com/users/ted/gists{/gist_id}"
// gravatar_id: ""
// hireable: true
// html_url: "https://github.com/ted"
// id: 16438063
// location: "Toronto, Ontario, CA"
// login: "ted"
// name: null
// node_id: "MDQ6VXNlcjE2NDM4MDYz"
// organizations_url: "https://api.github.com/users/ted/orgs"
// public_gists: 0
// public_repos: 3
// received_events_url: "https://api.github.com/users/ted/received_events"
// repos_url: "https://api.github.com/users/ted/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/ted/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/ted/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2021-09-19T15:25:29Z"
// url: "https://api.github
