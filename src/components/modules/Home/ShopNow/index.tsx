"use client";
import Image from "next/image";
import Link from "next/link";
import shopNowImg from "../../../../assets/ShopNow.jpg";

const ShopNow = () => {
  return (
    <div>
      <section className="overflow-hidden my-20 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-6 sm:p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h3 className="text-teal-700 text-xl sm:text-2xl font-bold">
              About Our Marketplace . . . .
            </h3>
            <h1 className="text-2xl sm:text-3xl font-bold mt-2">
              Elevate Your Reselling Journey with Trust & Value
            </h1>
            <div className="py-3 text-sm sm:text-base">
              Welcome to SecondNest! Discover a trusted space where pre-loved
              treasures find new homes. Whether you are buying or selling, our
              platform makes it easy, secure, and rewarding.
              <p className="my-2">
                We connect people with purpose — giving secondhand items a
                second life. Enjoy great deals, verified users, and a smooth
                experience built on transparency and community trust.
              </p>
            </div>
            <Link href="/products">
              <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white my-4 mt-2 bg-teal-700 text-white text-sm sm:text-base">
                Browse Listings Now
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-full w-full rounded-md md:rounded-l-full sm:rounded-ss-[30px] md:rounded-ss-[60px] overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-700/60 to-transparent z-10"></div>

          {/* Image */}
          <Image
            alt="ShopNowImg"
            src={shopNowImg}
            className="h-full w-full object-cover z-0"
          />
        </div>
      </section>
      <div className="mt-28 mb-28"></div>
    </div>
  );
};

export default ShopNow;
