"use client";
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { Card, CardContent } from "../card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa6";
import { TProduct } from "../../../types/product";
import { RootState } from "../../../redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/features/wishlist/wishlistSlice";
import { Button } from "../button";

export default function ProductCard({ product }: { product: TProduct }) {
  const router = useRouter();
  const { title, category, images, price, status, description } = product || {};

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
    <Card className="w-full overflow-hidden shadow-lg rounded-xl p-0">
      <div className="flex flex-col md:flex-row w-full">
        {/* Image section */}
        <div className="w-full md:w-[40%] h-60 relative">
          {/* sold tag */}
          {status === "sold" && (
            <div className="absolute bottom-4 left-4 bg-teal-700 text-white py-1 px-4 text-xs font-semibold  z-10 capitalize rounded-md">
              {status} Out
            </div>
          )}

          <Image
            src={images?.[0]}
            alt="product image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg p-3 rounded-2xl"
          />
        </div>

        {/* Content section */}
        <CardContent className="flex justify-center items-center md:w-[60%]">
          <div className="px-4 space-y-3 mt-0 ">
            {/* title & price */}
            <div className="flex justify-between items-center">
              <h2 className="text-[17px] font-bold capitalize">
                {title?.length > 20 ? title?.slice(0, 20) + "..." : title}
              </h2>
              <button
                onClick={
                  isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist
                }
                className={`hover:text-teal-700 cursor-pointer ${
                  isInWishlist ? "text-red-500" : ""
                }`}
              >
                {isInWishlist ? (
                  <FaBookmark size={25} className=" text-teal-700" />
                ) : (
                  <Bookmark size={25} className="" />
                )}
              </button>
            </div>

            {/* description */}
            <div className="flex justify-between items-center">
              <h2 className="text-[13px] capitalize">
                {description?.length > 80
                  ? description?.slice(0, 100) + "..."
                  : description}
              </h2>
            </div>

            {/* category & wishlist */}
            <div className="flex justify-between items-center text-sm">
              <span className="capitalize border px-[2px] rounded-[5px] py-[1px]">
                {category}
              </span>
              <span className="font-medium">BDT {price} ৳</span>
            </div>

            {/* action buttons */}
            <div className="mt-4 flex justify-between items-center mb-4">
              {/* details button */}
              <Link href={`/products/${product?._id}`}>
                <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 bg-zinc-50">
                  Details
                </button>
              </Link>
              {/* buy now button */}
              <Button
                onClick={handleBuyNow}
                disabled={status === "sold"}
                className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
