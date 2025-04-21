"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TProduct } from "../../../types/product";
import { Button } from "../../ui/button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ProductDetailsCategoryWise({
  product,
}: {
  product: TProduct;
}) {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push(`/checkout?id=${product._id}`);
  };

  return (
    <div className="mt-4">
      <div className="mx-auto">
        <div className="w-[80%] h-[50vh] mx-auto my-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {product?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image} // Assuming image is a URL in the array
                  alt={`Product Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Product details */}
      <div className="space-y-4 my-10">
        <h2 className="text-3xl font-bold capitalize text-center">
          {product?.title}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6 w-full max-w-3xl mx-auto">
          {/* Product Basic Information */}
          <div className="space-y-2">
            {product?.status === "sold" && (
              <p className="text-xl text-red-500 font-semibold uppercase">
                {product?.status} out 🥺
              </p>
            )}
            <h3 className="text-xl font-bold text-gray-800">Description</h3>
            <p className="text-gray-600">{product?.description}</p>
          </div>

          {/* Additional Information */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Additional Information
            </h3>
            <div className="space-y-3 grid grid-cols-2">
              <div className="flex gap-2">
                <p className="font-medium text-gray-700">Category:</p>
                <p className="text-gray-600 capitalize">{product?.category}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-medium text-gray-700">Condition:</p>
                <p className="text-gray-600 capitalize">{product?.condition}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-medium text-gray-700">Price:</p>
                <p className="text-gray-600 capitalize">
                  BDT {product?.price} ৳
                </p>
              </div>
              {product?.brand && (
                <div className="flex gap-2">
                  <p className="font-medium text-gray-700">Brand:</p>
                  <p className="text-gray-600 capitalize">{product?.brand}</p>
                </div>
              )}
              <div className="flex gap-2">
                <p className="font-medium text-gray-700">Location:</p>
                <p className="text-gray-600 capitalize">{product?.location}</p>
              </div>
              {product?.negotiable && (
                <div className="flex gap-2">
                  <p className="font-medium text-gray-700">Negotiable:</p>
                  <p className="text-gray-600 capitalize">
                    {product?.negotiable}
                  </p>
                </div>
              )}
              {product?.warranty && (
                <div className="flex gap-2">
                  <p className="font-medium text-gray-700">Warranty:</p>
                  <p className="text-gray-600">{product?.warranty}</p>
                </div>
              )}
              {product?.contactNumber && (
                <div className="flex gap-2">
                  <p className="font-medium text-gray-700">Contact Number:</p>
                  <p className="text-gray-600">{product?.contactNumber}</p>
                </div>
              )}
            </div>
          </div>

          {/* Button */}
          <div className="flex gap-4">
            <Button
              onClick={handleBuyNow}
              disabled={product?.status === "sold"}
              className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white w-full"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
