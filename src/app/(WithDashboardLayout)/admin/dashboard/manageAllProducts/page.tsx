export const dynamic = "force-dynamic";
import React from "react";
import ManageAllProductsAdmin from "../../../../../components/modules/Products/ManageAllProductByAdmin";
import { getAllProducts } from "../../../../../services/ProductApi";

const ManageAllProductsByAdmin = async () => {
  const { data } = await getAllProducts();
  const products = data ?? [];
  return (
    <div>
      <ManageAllProductsAdmin products={products} />
    </div>
  );
};

export default ManageAllProductsByAdmin;
