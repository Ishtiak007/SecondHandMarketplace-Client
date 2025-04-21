import { Fragment } from "react";
import { TProduct } from "../../../../types/product";
import { getProductById } from "../../../../services/ProductApi";
import ProductDetails from "../../../../components/modules/AllProductsPage/ProductDetails";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product }: { data: TProduct } = await getProductById(id);

  return (
    <Fragment>
      <ProductDetails product={product} />
    </Fragment>
  );
}
