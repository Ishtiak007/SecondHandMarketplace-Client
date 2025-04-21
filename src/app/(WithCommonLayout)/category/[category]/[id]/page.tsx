import { Fragment } from "react";
import ProductDetailsCategoryWise from "../../../../../components/modules/AllProductsPage/CategoryWiseDetails";
import { TProduct } from "../../../../../types/product";
import { getProductById } from "../../../../../services/ProductApi";

export default async function CategoryWiseProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product }: { data: TProduct } = await getProductById(id);

  return (
    <Fragment>
      <ProductDetailsCategoryWise product={product} />
    </Fragment>
  );
}
