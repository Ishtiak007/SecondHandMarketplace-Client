"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import home from "../../../../assets/home.jpg";
import office from "../../../../assets/office.jpg";
import vehicles from "../../../../assets/vehicles.jpg";
import fashion from "../../../../assets/fashion.jpg";
import sports from "../../../../assets/sports.jpg";
import baby from "../../../../assets/baby.jpg";
import pets from "../../../../assets/pets.jpg";

const CategoryOverview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = [
    {
      id: 1,
      title: "HOME AND LIVING",
      description:
        "HOME AND LIVING category related essentials can be found here",
      image: home,
    },
    {
      id: 2,
      title: "EDUCATION",
      description: "EDUCATION category related essentials can be found here",
      image: office,
    },
    {
      id: 3,
      title: "VEHICLES",
      description: "VEHICLES category related essentials can be found here",
      image: vehicles,
    },
    {
      id: 4,
      title: "MENS FASHION & GROOMING",
      description:
        "MENS FASHION & GROOMING category related essentials can be found here",
      image: fashion,
    },
    {
      id: 5,
      title: "HOBBIES-SPORTS",
      description:
        "HOBBIES-SPORTS category related essentials can be found here",
      image: sports,
    },
    {
      id: 6,
      title: "KIDS",
      description: "KIDS category related essentials can be found here",
      image: baby,
    },
    {
      id: 7,
      title: "PETS AND ANIMAL",
      description:
        "PETS AND ANIMAL category related essentials can be found here",
      image: pets,
    },
  ];

  return (
    <div className="overflow-hidden my-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-center text-teal-700 mb-6 sm:mb-8">
        Category Overview
      </h2>

      <Slider {...settings}>
        {categories.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-4 sm:p-5 space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-teal-600 uppercase line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 line-clamp-3 h-20">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryOverview;
