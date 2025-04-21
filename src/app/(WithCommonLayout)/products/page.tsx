import React from "react";
import AllProducts from "../../../components/modules/AllProductsPage";
import { TProduct } from "../../../types/product";
import { getAllProducts } from "../../../services/ProductApi";

const AllProductsPage = async () => {
  const { data: products }: { data: TProduct[] } = await getAllProducts();
  console.log(products);
  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
};

export default AllProductsPage;
