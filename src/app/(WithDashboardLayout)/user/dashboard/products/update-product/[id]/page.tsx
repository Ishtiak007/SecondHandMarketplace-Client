import React from "react";
import { getProductById } from "../../../../../../../services/ProductApi";
import ProductUpdateForm from "../../../../../../../components/modules/Products/ProductUpdate";

const ProductUpdatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: product } = await getProductById(id);
  return (
    <div className="p-4">
      <ProductUpdateForm product={product} />
    </div>
  );
};

export default ProductUpdatePage;
