import React from "react";
import { getAllProducts } from "../../../../services/ProductApi";
import { getAllUsers } from "../../../../services/UserApi";
import {
  getPurchaseHistory,
  getSalesHistory,
} from "../../../../services/OrderApi";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const AnalysisCard = async () => {
  const { data: products } = await getAllProducts();
  const { data: users } = await getAllUsers();
  const { data: purchases } = await getPurchaseHistory();
  const { data: sales } = await getSalesHistory();

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {/* Total Products */}
      <Card
        count={products?.length}
        label="Total Products"
        icon={
          <MdProductionQuantityLimits size={35} className="text-gray-100" />
        }
        bgColor="bg-green-600/65"
        linkText="Manage Products"
        linkHref="/admin/dashboard/manageAllProducts"
      />

      {/* Total Users */}
      <Card
        count={users?.result?.length}
        label="Total Users"
        icon={<FaUser size={35} className="text-gray-100" />}
        bgColor="bg-orange-600/65"
        linkText="Manage Users"
        linkHref="/admin/dashboard/users"
      />

      {/* Total Purchases */}
      <Card
        count={purchases?.result?.length}
        label="Total Purchases"
        icon={<FaUser size={35} className="text-gray-100" />}
        bgColor="bg-pink-600/65"
        linkText="Manage Purchases"
        linkHref="/user/dashboard/orders/purchase-history"
      />

      {/* Total Sales */}
      <Card
        count={sales?.result?.length}
        label="Total Sales"
        icon={<FaUser size={35} className="text-gray-100" />}
        bgColor="bg-sky-600/65"
        linkText="Manage Sales"
        linkHref="/user/dashboard/orders/sales-history"
      />
    </div>
  );
};

const Card = ({
  count,
  label,
  icon,
  bgColor,
  linkText,
  linkHref,
}: {
  count: number;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className={`w-full p-4 ${bgColor} text-white rounded shadow-md`}>
    <div className="flex items-center justify-between">
      <div>
        <div className="text-3xl font-bold">{count ?? 0}</div>
        <div className="text-sm">{label}</div>
      </div>
      <div className="relative">
        {icon}
        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-white rounded-full"></span>
      </div>
    </div>
    <Link href={linkHref}>
      <div className="mt-4 text-sm underline cursor-pointer bg-amber-50/15 p-3">
        {linkText}
      </div>
    </Link>
  </div>
);

export default AnalysisCard;
