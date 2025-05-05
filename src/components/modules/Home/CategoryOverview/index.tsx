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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
    <div className="slider-container my-10 px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {categories.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm font-semibold text-teal-600 uppercase">
                  {item.title}
                </p>
                <p className="text-base text-gray-800 h-20">
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
