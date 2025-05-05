"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      img: "https://i.ibb.co.com/whYBdyLG/Img1.jpg",
      heading: "Join the Sustainable Shopping Movement",
      desc: "Start buying and selling pre-owned products today. Help reduce waste and make a difference in the world.",
    },
    {
      img: "https://i.ibb.co.com/0pL4XDzV/Img2.jpg",
      heading: "Quality Products, Affordable Prices",
      desc: "Browse through our vast collection of second-hand items that are quality-checked and available at unbeatable prices.",
    },
    {
      img: "https://i.ibb.co.com/Qv8087Tn/Img4.jpg",
      heading: "Discover the Best Deals in Your Favorite Categories",
      desc: "From electronics to fashion, we have products from every category. Find exactly what you need at a fraction of the price.",
    },
    {
      img: "https://i.ibb.co.com/Y5N4M9H/Img6.jpg",
      heading: "Sustainable Shopping Starts Here",
      desc: "Join our platform and embrace eco-friendly shopping. Find affordable pre-owned items and reduce waste.",
    },
    {
      img: "https://i.ibb.co.com/LyqvKgK/Img3.jpg",
      heading: "Sell Your Pre-Loved Items and Earn",
      desc: "Have items you no longer need? Sell them on our marketplace and connect with buyers looking for great deals.",
    },
    {
      img: "https://i.ibb.co.com/PvpZRhhW/Img7.jpg",
      heading: "Discover Amazing Deals on Pre-Loved Products",
      desc: "Shop for second-hand items and give them a second life. Get great deals on everything from electronics to home decor.",
    },
    {
      img: "https://i.ibb.co.com/F4CyDKJp/Img5.jpg",
      heading: "Explore a World of Second-Hand Treasures",
      desc: "Find unique and rare items from various categories. Give pre-loved products a second chance to shine!",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <div className="justify-center items-center m-auto">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track current slide index
        >
          {data.map((d, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={activeIndex} // Force re-render on slide change
                className="relative w-full h-[450px] sm:h-[600px] md:h-[750px] bg-cover bg-center bg-no-repeat px-4"
                style={{ backgroundImage: `url(${d.img})` }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                {/* Simple Light Blue Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, #005F5A, rgba(21, 21, 21, 0.00))",
                  }}
                ></div>

                {/* Centering Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:ml-40 px-5 max-w-3xl">
                  <div className="py-8 sm:py-12 md:py-16 text-left">
                    <h2
                      className="text-white font-semibold text-3xl uppercase sm:text-3xl md:text-4xl pb-4 sm:pb-6"
                      data-aos="fade-left"
                    >
                      {d.heading}
                      <br />
                    </h2>
                    <p
                      className="text-white pb-6 sm:pb-8 text-sm sm:text-base"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      {d.desc}
                    </p>
                    <Link href={"/register"}>
                      <button
                        className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white my-4 mt-2 bg-teal-700 text-white text-sm sm:text-base"
                        data-aos="flip-right"
                      >
                        Register Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
