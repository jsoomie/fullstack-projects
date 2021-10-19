import {
  UserRepos,
  UserBadges,
  UserBackButton,
  UserLeftPanel,
  UserRightPanel,
} from "../index";
import { Fragment } from "react";
import "./UserInfo.css";

import { UserData } from "../../interface";

export const UserInfo = ({ user }: { user: UserData[] }) => {
  const userData = JSON.parse(JSON.stringify(user));

  return (
    <Fragment>
      <UserBackButton />
      <Fragment>
        <div id="UserDetails">
          <UserLeftPanel user={userData} />
          <UserRightPanel user={userData} />
        </div>
        <UserBadges user={userData} />
        <UserRepos />
      </Fragment>
    </Fragment>
  );
};
