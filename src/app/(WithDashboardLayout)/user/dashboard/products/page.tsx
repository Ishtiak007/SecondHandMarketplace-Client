export const dynamic = "force-dynamic";
import React from "react";
import { getProductsByUser } from "../../../../../services/ProductApi";
import ManageUserAddedProducts from "../../../../../components/modules/Products/ManageUserAddedProducts";

const UserAddedProducts = async () => {
  const { data } = await getProductsByUser();
  const products = data ?? [];
  return (
    <div>
      <ManageUserAddedProducts products={products} />
    </div>
  );
};

export default UserAddedProducts;
