export const dynamic = "force-dynamic";
import ManageUsers from "../../../../../components/modules/Dashboard/Users";
import { getAllUsers } from "../../../../../services/UserApi";

export default async function ProductsManagementPage() {
  const { data } = await getAllUsers();
  const users = data.result ?? [];

  return (
    <div className="p-4">
      <ManageUsers users={users} />
    </div>
  );
}
