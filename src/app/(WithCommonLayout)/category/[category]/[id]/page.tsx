import React from "react";
import { TProduct } from "../../../../../types/product";
import { getProductById } from "../../../../../services/ProductApi";
import ProductDetailsCategoryWise from "../../../../../components/modules/AllProductsPage/CategoryWiseDetails";

const CategoryCardDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: product }: { data: TProduct } = await getProductById(id);
  return (
    <div>
      <ProductDetailsCategoryWise product={product} />
    </div>
  );
};

export default CategoryCardDetailsPage;
