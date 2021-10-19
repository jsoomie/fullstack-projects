import { UserInfo } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { githubContext } from "../context";

export const UserDetails = () => {
  const { getUser, user } = useContext(githubContext);
  const { id: username } = useParams<{ id: string }>();

  useEffect(() => {
    getUser(username);
    //eslint-disable-next-line
  }, []);

  return <UserInfo user={user} />;
};
