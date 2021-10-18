import {
  Spinner,
  UserRepos,
  UserBadges,
  UserBackButton,
  UserLeftPanel,
  UserRightPanel,
} from "../index";
import { Fragment, useContext, useEffect } from "react";
import "./UserInfo.css";

import { useParams } from "react-router-dom";
import { githubContext } from "../../context";

export const UserInfo = () => {
  const { id: username } = useParams<{ id: string }>();
  const { getUser, loading, user } = useContext(githubContext);

  useEffect(() => {
    getUser(username);
  }, []);

  const userData = JSON.parse(JSON.stringify(user));

  return (
    <Fragment>
      <UserBackButton />
      {!loading && user ? (
        <Fragment>
          <div id="UserDetails">
            <UserLeftPanel {...userData} />
            <UserRightPanel {...userData} />
          </div>
          <UserBadges {...userData} />
          <UserRepos {...userData} />
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
