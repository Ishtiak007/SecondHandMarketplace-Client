"use client";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Card, CardContent } from "../card";
import { Button } from "../button";
import Link from "next/link";
import { TProduct } from "@/types";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import { RootState } from "@/redux/store";
import { FaHeart } from "react-icons/fa6";

export default function ProductCard({ product }: { product: TProduct }) {
  const router = useRouter();
  const { title, category, images, price, status } = product || {};

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const isInWishlist = wishlistItems.some((item) => item._id === product._id);

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(product));
    }
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(product._id));
  };

  const handleBuyNow = () => {
    router.push(`/checkout?id=${product._id}`);
  };

  return (
    <Card className="w-full overflow-hidden shadow-lg rounded-lg p-0">
      <div className="w-full h-60 relative">
        {/* sold tag */}
        {status === "sold" && (
          <div className="absolute top-3 left-3 bg-red-500 text-white py-1 px-3 text-xs font-bold rounded-br-lg z-10">
            {status}
          </div>
        )}

        <Image
          src={images?.[0]}
          alt="product image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg "
        />
      </div>
      <CardContent className="px-4 space-y-2 mt-0">
        {/* title & price */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold capitalize">
            {title?.length > 20 ? title?.slice(0, 20) + "..." : title}
          </h2>
          <span className=" font-bold">BDT {price}</span>
        </div>

        {/* category & wishlist */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span className="capitalize">{category}</span>
          <button
            onClick={
              isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist
            }
            className={`hover:text-red-500 cursor-pointer ${
              isInWishlist ? "text-red-500" : ""
            }`}
          >
            {isInWishlist ? (
              <FaHeart className="w-5 h-5 text-red-500" />
            ) : (
              <Heart className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* action buttons */}
        <div className="mt-4 flex justify-between mb-4">
          {/* details button */}
          <Link href={`/products/${product?._id}`}>
            <button className="text-sm text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
              Details
            </button>
          </Link>
          {/* buy now button */}

          <Button
            onClick={handleBuyNow}
            disabled={status === "sold"}
            className="bg-[#F59E0B] text-white hover:bg-[#D97706] cursor-pointer"
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
