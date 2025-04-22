"use client";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import blog1 from "../../../assets/office.jpg";
import blog2 from "../../../assets/property.jpg";
import blog3 from "../../../assets/groceries.jpg";

const Blog = () => {
  return (
    <div className="my-10">
      <div className="lg:flex justify-center items-center gap-10">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative lg:size-[400px] size-[150px] rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={blog1}
              alt="img"
              className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-teal-700 bg-opacity-15 text-white p-4 rounded-lg transition-all group-hover:bg-opacity-90  group-hover:translate-y-[-10px]">
              <div className="text-sm mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <User />
                  <strong className="underline">Author</strong>: Admin
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineDateRange /> 15th January 2023
                </span>
              </div>
              <h4 className="text-lg font-semibold">
                <p className="transition duration-300">
                  Tips for Selling Your Used Items Successfully
                </p>
              </h4>
              <p className="text-sm mt-1">
                Learn the best practices for listing your used products and
                attracting buyers on SecondHand Marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* blog 2 */}

        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative lg:size-[400px] size-[150px] rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={blog2}
              alt="img"
              className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-teal-700 bg-opacity-15 text-white p-4 rounded-lg transition-all group-hover:bg-opacity-90  group-hover:translate-y-[-10px]">
              <div className="text-sm mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <User />
                  <strong className="underline">Author</strong>: Admin
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineDateRange /> 20th December 2022
                </span>
              </div>
              <h4 className="text-lg font-semibold">
                <p className="transition duration-300">
                  How to Find the Best Deals When Buying Second-Hand Items
                </p>
              </h4>
              <p className="text-sm mt-1">
                Discover strategies for getting great deals on pre-owned
                products, from checking item conditions to negotiating prices.
              </p>
            </div>
          </div>
        </div>

        {/* blog-3 */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative lg:size-[400px] size-[150px] rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={blog3}
              alt="img"
              className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-teal-700 bg-opacity-15 text-white p-4 rounded-lg transition-all group-hover:bg-opacity-90  group-hover:translate-y-[-10px]">
              <div className="text-sm mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <User />
                  <strong className="underline">Author</strong>: Admin
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineDateRange /> 10th November 2022
                </span>
              </div>
              <h4 className="text-lg font-semibold">
                <p className="transition duration-300">
                  Managing Your Listings: How to Keep Your Products Visible
                </p>
              </h4>
              <p className="text-sm mt-1">
                Maximize the visibility of your listings on SecondHand
                Marketplace with these helpful tips and tricks for sellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
