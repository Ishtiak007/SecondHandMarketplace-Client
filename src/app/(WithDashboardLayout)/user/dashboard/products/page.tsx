import React from "react";
import { getProductsByUser } from "../../../../../services/ProductApi";
import ManageAllProducts from "../../../../../components/modules/Products/ManageProducts";

const AllProductsForManage = async () => {
  const { data } = await getProductsByUser();
  const products = data ?? [];
  return (
    <div>
      <ManageAllProducts products={products} />
    </div>
  );
};

export default AllProductsForManage;
