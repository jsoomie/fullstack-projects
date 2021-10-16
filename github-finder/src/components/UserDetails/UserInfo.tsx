import {
  Spinner,
  UserRepos,
  UserBadges,
  UserBackButton,
  UserLeftPanel,
  UserRightPanel,
} from "../index";
import { Fragment } from "react";
import { InterData } from "../../pages/UserDetails";
import "./UserInfo.css";

interface UserInfoProps {
  data: InterData;
  loading: boolean;
}

export const UserInfo = ({ loading, data }: UserInfoProps) => {
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
