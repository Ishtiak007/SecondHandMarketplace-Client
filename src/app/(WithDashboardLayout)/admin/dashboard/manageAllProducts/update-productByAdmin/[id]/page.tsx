import React from "react";
import { getProductById } from "../../../../../../../services/ProductApi";
import UpdateProductByAdminForm from "../../../../../../../components/modules/Products/ProductsUpdateByAdmin";

const UpdateProductByAdmin = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: product } = await getProductById(id);
  return (
    <div>
      <UpdateProductByAdminForm product={product} />
    </div>
  );
};

export default UpdateProductByAdmin;
