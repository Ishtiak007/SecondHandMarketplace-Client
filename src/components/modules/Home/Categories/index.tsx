"use client";

import Container from "../../../shared/Container";
import Image from "next/image";
import Link from "next/link";
import home from "../../../../assets/home.jpg";
import electronics from "../../../../assets/electronics.jpg";
import books from "../../../../assets/books.jpg";
import furniture from "../../../../assets/furniture.jpg";
import tools from "../../../../assets/tools.jpg";
import office from "../../../../assets/office.jpg";
import mobiles from "../../../../assets/mobiles.jpg";
import vehicles from "../../../../assets/vehicles.jpg";
import property from "../../../../assets/property.jpg";
import pets from "../../../../assets/pets.jpg";
import cloths from "../../../../assets/cloths.jpg";
import sports from "../../../../assets/sports.jpg";
import toys from "../../../../assets/toys.jpg";
import beauty from "../../../../assets/beauty.jpg";
import fashion from "../../../../assets/fashion.jpg";
import music from "../../../../assets/music.jpg";
import gaming from "../../../../assets/gaming.jpg";
import groceries from "../../../../assets/groceries.jpg";
import baby from "../../../../assets/baby.jpg";
import art from "../../../../assets/art.jpg";
import garden from "../../../../assets/garden.jpg";
import jewelry from "../../../../assets/jewelry.jpg";
import health from "../../../../assets/health.jpg";
import watches from "../../../../assets/watches.jpg";
import travel from "../../../../assets/travel.jpg";

// category data
const categories = [
  { name: "home", image: home },
  { name: "electronics", image: electronics },
  { name: "books", image: books },
  { name: "furniture", image: furniture },
  { name: "tools", image: tools },
  { name: "office", image: office },
  { name: "mobiles", image: mobiles },
  { name: "vehicles", image: vehicles },
  { name: "property", image: property },
  { name: "pets", image: pets },
  { name: "cloths", image: cloths },
  { name: "sports", image: sports },
  { name: "toys", image: toys },
  { name: "beauty", image: beauty },
  { name: "fashion", image: fashion },
  { name: "music", image: music },
  { name: "gaming", image: gaming },
  { name: "groceries", image: groceries },
  { name: "baby", image: baby },
  { name: "art", image: art },
  { name: "garden", image: garden },
  { name: "jewelry", image: jewelry },
  { name: "health", image: health },
  { name: "watches", image: watches },
  { name: "travel", image: travel },
];

export default function AllCategoryHomeSection() {
  return (
    <Container>
      <div className="my-20">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-center text-teal-700 mb-6 sm:mb-8">
          Browse items by category
        </h2>
        {/* categories card */}
        <div className="mt-4">
          <div className="mt-4 flex flex-wrap justify-center gap-5 p-3">
            {categories.map((category, index) => (
              <Link
                href={`/category/${category.name}`}
                key={index}
                className="block"
              >
                <div className="rounded-md relative bg-gray-100 dark:bg-neutral-900 h-[95px] w-[230px] transition-all duration-300 ease-out border overflow-hidden">
                  <Image
                    src={category.image}
                    fill
                    alt={category.name}
                    className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-teal-700/50 py-2 px-2">
                    <div className="text-base md:text-lg font-medium text-white uppercase text-center flex items-center">
                      {category.name}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
