import { Fragment } from "react";
import ProductCardForCategory from "../../../../components/ui/core/ProductCardForCategory";
import { TProduct } from "../../../../types/product";
import { getProductsByCategory } from "../../../../services/ProductApi";
import Container from "../../../../components/shared/Container";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const { data: products }: { data: TProduct[] } = await getProductsByCategory(
    category
  );

  if (!(products ?? false)) {
    return (
      <Fragment>
        <p className="text-center mt-[15%] text-gray-500 text-lg">
          No items available under this category at the moment. ❗❗❗
        </p>
      </Fragment>
    );
  }

  return (
    <Container className="mt-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {products?.map((product) => (
          <ProductCardForCategory key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
}
