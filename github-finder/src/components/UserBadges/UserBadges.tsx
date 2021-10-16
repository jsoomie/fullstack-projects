import { UserData } from "../../interface";

export const UserBadges = ({
  followers,
  following,
  public_repos,
  public_gists,
}: UserData) => {
  return (
    <div className="BottomPanel">
      <ul>
        <li className="badge warning">Followers: {followers}</li>
        <li className="badge primary">Following: {following}</li>
        <li className="badge success">Public Repos: {public_repos}</li>
        <li className="badge dark">Public Gists: {public_gists}</li>
      </ul>
    </div>
  );
};
