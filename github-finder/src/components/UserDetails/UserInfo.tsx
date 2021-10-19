import {
  Spinner,
  UserRepos,
  UserBadges,
  UserBackButton,
  UserLeftPanel,
  UserRightPanel,
} from "../index";
import { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { githubContext } from "../../context";
import "./UserInfo.css";

export const UserInfo = () => {
  const { id: username } = useParams<{ id: string }>();
  const { getUser, user } = useContext(githubContext);

  useEffect(() => {
    getUser(username);
    //eslint-disable-next-line
  }, []);

  const userData = JSON.parse(JSON.stringify(user));

  return (
    <Fragment>
      <UserBackButton />
      {user ? (
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
