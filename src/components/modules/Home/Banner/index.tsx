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
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {data.map((d, index) => (
          <SwiperSlide key={index}>
            <motion.div
              key={activeIndex}
              className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${d.img})` }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#005F5A] to-transparent"
                aria-hidden="true"
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex items-center justify-center text-white px-4 sm:px-8 lg:px-16">
                <div
                  className="max-w-3xl text-center md:text-left"
                  data-aos="fade-left"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 sm:mb-6">
                    {d.heading}
                  </h2>
                  <p
                    className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    {d.desc}
                  </p>
                  <Link href="/register">
                    <button
                      className="px-6 py-2 text-sm sm:text-base font-semibold rounded-full bg-teal-700 hover:bg-teal-800 transition-all duration-300"
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
  );
};

export default Banner;
