"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";
import Link from "next/link";
import { TProduct } from "@/types";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import { Heart } from "lucide-react";

export default function ProductCardVariant({ product }: { product: TProduct }) {
  const router = useRouter();
  const { title, images, price, status } = product || {};

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
    <div className="border rounded-2xl shadow-md p-4  bg-white relative">
      {/* sold tag */}
      {status === "sold" && (
        <div className="absolute top-4 left-4 bg-red-500 text-white py-1 px-3 text-xs font-bold rounded-tl-lg rounded-br-md z-10">
          {status}
        </div>
      )}
      {/* Product Image */}
      <div className="relative w-full h-48">
        <Image
          src={images?.[0]}
          alt="Illuminated wooden letters"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      {/* Product Title */}
      <h3 className="text-lg font-semibold capitalize mt-4">
        {title?.length > 20 ? title?.slice(0, 20) + "..." : title}
      </h3>
      {/* Price */}

      <span className=" font-bold text-[#F59E0B]">BDT {price}</span>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-4">
        <div>
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
          <Link href={`/category/category/${product._id}`}>
            <button className=" cursor-pointer ml-4">
              <IoArrowRedo className="w-6 h-6 text-blue-600 " />
            </button>
          </Link>
        </div>
        <Button
          onClick={handleBuyNow}
          disabled={status === "sold"}
          className="bg-[#F59E0B] text-white hover:bg-[#D97706] cursor-pointer"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
