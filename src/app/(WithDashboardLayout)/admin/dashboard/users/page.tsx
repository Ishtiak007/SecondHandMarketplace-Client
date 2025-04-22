export const dynamic = "force-dynamic";
import ManageUsers from "../../../../../components/modules/Dashboard/Users";
import { getAllUsers } from "../../../../../services/UserApi";

const AllUsersManagement = async () => {
  const { data } = await getAllUsers();
  const users = data?.result ?? [];
  return (
    <div>
      <ManageUsers users={users} />
    </div>
  );
};

export default AllUsersManagement;
