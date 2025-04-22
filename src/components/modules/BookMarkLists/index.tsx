"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Container from "../../shared/Container";
import ProductCard from "../../ui/core/ProductCard";

export default function BookMarkLists() {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  return (
    <Container className="mt-4">
      {wishlistItems.length === 0 && (
        <div className="flex justify-center items-center h-[50vh] w-full">
          <p>You Are not selected any product for Bookmark. ❗❗❗</p>
        </div>
      )}
      {/* product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {wishlistItems.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
}
