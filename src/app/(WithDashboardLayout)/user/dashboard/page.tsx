export const dynamic = "force-dynamic";
import { Fragment } from "react";
import { getMe } from "../../../../services/UserApi";
import UserProfile from "../../../../components/modules/Dashboard/UserProfile";

export default async function UserProfilePage() {
  const { data: profileData } = await getMe();
  return (
    <Fragment>
      <UserProfile profileData={profileData} />
    </Fragment>
  );
}
