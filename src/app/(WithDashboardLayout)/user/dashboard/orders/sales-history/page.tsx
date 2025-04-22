export const dynamic = "force-dynamic";
import SalesHistory from "../../../../../../components/modules/Dashboard/Orders/SalesHistory";
import { getSalesHistory } from "../../../../../../services/OrderApi";

export default async function SalesHistoryPage() {
  const { data } = await getSalesHistory();
  const salesHistory = data?.result ?? [];
  return (
    <div className="p-4">
      <SalesHistory salesHistory={salesHistory} />
    </div>
  );
}
