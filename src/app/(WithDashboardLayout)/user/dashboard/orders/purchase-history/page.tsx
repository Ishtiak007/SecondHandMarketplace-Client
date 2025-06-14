export const dynamic = "force-dynamic";
import PurchaseHistory from "../../../../../../components/modules/Dashboard/Orders/PurchaseHistory";
import { getPurchaseHistory } from "../../../../../../services/OrderApi";

export default async function PurchaseHistoryPage() {
  const { data } = await getPurchaseHistory();
  const purchaseHistory = data?.result ?? [];
  return (
    <div className="p-4">
      <PurchaseHistory purchaseHistory={purchaseHistory} />
    </div>
  );
}
