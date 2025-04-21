"use client";
import { useState } from "react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { X } from "lucide-react";
import { districts } from "../Products/AddProducts/districts";

const categories = [
  "home",
  "electronics",
  "books",
  "furniture",
  "tools",
  "office",
  "mobiles",
  "vehicles",
  "property",
  "pets",
  "cloths",
  "sports",
  "toys",
  "beauty",
  "fashion",
  "music",
  "gaming",
  "groceries",
  "baby",
  "art",
  "garden",
  "jewelry",
  "health",
  "watches",
  "travel",
];
const condition = ["new", "like new", "used", "refurbished"];

export default function SidebarFilters({
  selectedCategories,
  setSelectedCategories,
  selectedConditions,
  setSelectedConditions,
  selectedDistricts,
  setSelectedDistricts,
  setIsAvailable,
}: {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedConditions: string[];
  setSelectedConditions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDistricts: string[];
  setSelectedDistricts: React.Dispatch<React.SetStateAction<string[]>>;
  setIsAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const toggleCondition = (conditionItem: string) => {
    setSelectedConditions((prev) =>
      prev.includes(conditionItem)
        ? prev.filter((item) => item !== conditionItem)
        : [...prev, conditionItem]
    );
  };

  const toggleDistrict = (district: string) => {
    setSelectedDistricts((prev) =>
      prev.includes(district)
        ? prev.filter((item) => item !== district)
        : [...prev, district]
    );
  };

  const toggleAvailability = () => {
    setIsAvailable((prev) => !prev);
  };

  return (
    <>
      {/* Small devices - Show only button */}
      <div className="hidden">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsOpen(true)}
        >
          Filters
        </Button>
      </div>

      {/* Sidebar for large devices */}
      <div className="hidden lg:block">
        <SidebarContent
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          selectedConditions={selectedConditions}
          toggleCondition={toggleCondition}
          selectedDistricts={selectedDistricts}
          toggleDistrict={toggleDistrict}
          toggleAvailability={toggleAvailability}
        />
      </div>

      {/* Small devices - Sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          {/* Sidebar Panel */}
          <div className="w-72 bg-white shadow-lg p-4 overflow-y-auto max-h-screen relative animate-slide-in">
            {/* Close button */}
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            <SidebarContent
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              selectedConditions={selectedConditions}
              toggleCondition={toggleCondition}
              selectedDistricts={selectedDistricts}
              toggleDistrict={toggleDistrict}
              toggleAvailability={toggleAvailability}
            />
          </div>

          {/* Click Outside to Close */}
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </>
  );
}

function SidebarContent({
  selectedCategories,
  toggleCategory,
  selectedConditions,
  toggleCondition,
  selectedDistricts,
  toggleDistrict,
  toggleAvailability,
}: {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  selectedConditions: string[];
  toggleCondition: (condition: string) => void;
  selectedDistricts: string[];
  toggleDistrict: (district: string) => void;
  toggleAvailability: () => void;
}) {
  return (
    <Card className="p-4 w-80 rounded-none max-h-screen overflow-y-auto scrollbar-hidden bg-none border-none">
      <div className="flex justify-between">
        {/* Districts filter */}
        <div className="">
          <h3 className="text-lg font-semibold text-teal-700 mb-2">Location</h3>
          <ul className=" dark:text-gray-300 space-y-1">
            {districts.map((item, index) => (
              <li key={index} className="flex items-center capitalize">
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-teal-700 rounded-sm checked:bg-teal-700 checked:border-teal-700 focus:ring-0"
                  checked={selectedDistricts.includes(item)}
                  onChange={() => toggleDistrict(item)}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Category filter */}
        <div>
          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">
              Category
            </h3>
            <ul className="space-y-1">
              {categories.map((item, index) => (
                <li key={index} className="flex items-center  capitalize">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-teal-700 rounded-sm checked:bg-teal-700 checked:border-teal-700 focus:ring-0"
                    checked={selectedCategories.includes(item)}
                    onChange={() => toggleCategory(item)}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Condition filter */}
          <div className="space-y-1 my-5">
            <h3 className="text-lg font-semibold text-teal-700 mb-2">
              Condition
            </h3>
            <ul className="space-y-1">
              {condition.map((item, index) => (
                <li key={index} className="flex items-center capitalize">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-teal-700 rounded-sm checked:bg-teal-700 checked:border-teal-700 focus:ring-0"
                    checked={selectedConditions.includes(item)}
                    onChange={() => toggleCondition(item)}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Availability */}
            <div className="my-5">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">
                Availability
              </h3>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={toggleAvailability}
                    className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-teal-700 rounded-sm checked:bg-teal-700 checked:border-teal-700 focus:ring-0"
                  />
                  For Sale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
