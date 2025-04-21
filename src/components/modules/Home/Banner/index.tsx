"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co.com/whYBdyLG/Img1.jpg')] h-[400px] lg:h-screen bg-cover">
              <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#005F5A] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                <div className="max-w-2xl p-4 z-10">
                  <h1 className="text-3xl font-bold text-white ">
                    Discover Amazing Deals on Pre-Loved Products
                  </h1>
                  <p className="text-sm text-white my-2">
                    Shop for second-hand items and give them a second life. Get
                    great deals on everything from electronics to home decor.
                  </p>
                  <Link href="/register">
                    <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 text-orange-50 mx-auto">
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co.com/0pL4XDzV/Img2.jpg')] h-[400px] lg:h-screen bg-cover">
              <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#005F5A] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                <div className="max-w-2xl p-4 z-10">
                  <h1 className="text-3xl font-bold text-white">
                    Sell Your Pre-Loved Items and Earn
                  </h1>
                  <p className="text-sm text-white my-2">
                    Have items you no longer need? Sell them on our marketplace
                    and connect with buyers looking for great deals.
                  </p>
                  <Link href="/register">
                    <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 text-orange-50 mx-auto">
                      List Your Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co.com/Qv8087Tn/Img4.jpg')] h-[400px] lg:h-screen bg-cover">
              <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#005F5A] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                <div className="max-w-2xl p-4 z-10">
                  <h1 className="text-3xl font-bold text-white ">
                    Sustainable Shopping Starts Here
                  </h1>
                  <p className="text-sm text-white my-2">
                    Join our platform and embrace eco-friendly shopping. Find
                    affordable pre-owned items and reduce waste.
                  </p>
                  <Link href="/register">
                    <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 text-orange-50 mx-auto">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co.com/Y5N4M9H/Img6.jpg')] h-[400px] lg:h-screen bg-cover">
              <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#005F5A] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                <div className="max-w-2xl p-4 z-10">
                  <h1 className="text-3xl font-bold text-white">
                    Discover the Best Deals in Your Favorite Categories
                  </h1>
                  <p className="text-sm text-white my-2">
                    From electronics to fashion, we have products from every
                    category. Find exactly what you need at a fraction of the
                    price.
                  </p>
                  <Link href="/register">
                    <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 text-orange-50 mx-auto">
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co.com/LyqvKgK/Img3.jpg')] h-[400px] lg:h-screen bg-cover">
              <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#005F5A] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                <div className="max-w-2xl p-4 z-10">
                  <h1 className="text-3xl font-bold text-white">
                    Quality Products, Affordable Prices
                  </h1>
                  <p className="text-sm text-white my-2">
                    Browse through our vast collection of second-hand items that
                    are quality-checked and available at unbeatable prices.
                  </p>
                  <Link href="/register">
                    <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 text-orange-50 mx-auto">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co.com/PvpZRhhW/Img7.jpg')] h-[400px] lg:h-screen bg-cover">
              <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#005F5A] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                <div className="max-w-2xl p-4 z-10">
                  <h1 className="text-3xl font-bold text-white">
                    Join the Sustainable Shopping Movement
                  </h1>
                  <p className="text-sm text-white my-2">
                    Start buying and selling pre-owned products today. Help
                    reduce waste and make a difference in the world.
                  </p>
                  <Link href="/register">
                    <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 text-orange-50 mx-auto">
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co.com/F4CyDKJp/Img5.jpg')] h-[400px] lg:h-screen bg-cover">
              <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#005F5A] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                <div className="max-w-2xl p-4 z-10">
                  <h1 className="text-3xl font-bold text-white">
                    Explore a World of Second-Hand Treasures
                  </h1>
                  <p className="text-sm text-white my-2">
                    Find unique and rare items from various categories. Give
                    pre-loved products a second chance to shine!
                  </p>
                  <Link href="/register">
                    <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 text-orange-50 mx-auto">
                      Discover Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
