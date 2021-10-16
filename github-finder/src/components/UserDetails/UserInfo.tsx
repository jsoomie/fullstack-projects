import {
  Spinner,
  UserRepos,
  UserBadges,
  UserBackButton,
  UserLeftPanel,
  UserRightPanel,
} from "../index";
import { Fragment } from "react";
import { UserDataProps } from "../../interface";
import "./UserInfo.css";

export const UserInfo = ({ loading, data }: UserDataProps) => {
  return (
    <Fragment>
      <UserBackButton />
      {!loading && data ? (
        <Fragment>
          <div id="UserDetails">
            <UserLeftPanel {...data} />
            <UserRightPanel {...data} />
          </div>
          <UserBadges {...data} />
          <UserRepos {...data} />
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
