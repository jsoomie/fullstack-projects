import { Spinner, UserInfo } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { githubContext } from "../context";

export const UserDetails = () => {
  const { getUser, user } = useContext(githubContext);
  const { id: username } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const res = await getUser(username);
      if (res) setLoading(false);
    };
    fetch();
    //eslint-disable-next-line
  }, []);

  return <>{!loading ? <UserInfo user={user} /> : <Spinner />}</>;
};
