import Image from "next/image";
import { User } from "lucide-react";
import { MdOutlineDateRange } from "react-icons/md";
import blog1 from "../../../assets/CartCar.jpg";
import blog2 from "../../../assets/cloths.jpg";
import blog3 from "../../../assets/groceries.jpg";

// Blog data
const blogData = [
  {
    image: blog1, // Make sure these are imported properly
    title: "Tips for Selling Your Used Items Successfully",
    date: "15th January 2023",
    description:
      "Learn the best practices for listing your used products and attracting buyers on SecondHand Marketplace.",
  },
  {
    image: blog2,
    title: "How to Find the Best Deals When Buying Second-Hand Items",
    date: "20th December 2022",
    description:
      "Discover strategies for getting great deals on pre-owned products, from checking item conditions to negotiating prices.",
  },
  {
    image: blog3,
    title: "Managing Your Listings: How to Keep Your Products Visible",
    date: "10th November 2022",
    description:
      "Maximize the visibility of your listings on SecondHand Marketplace with these helpful tips and tricks for sellers.",
  },
];

const BlogSection = () => {
  return (
    <div className="my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="relative w-full max-w-[400px] rounded-lg overflow-hidden shadow-lg group"
          >
            <Image
              src={blog.image}
              alt="Blog image"
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-teal-700 bg-opacity-15 text-white p-4 rounded-lg transition-all duration-300 group-hover:bg-opacity-90 group-hover:translate-y-[-10px]">
              <div className="text-sm mb-2 flex items-center justify-between flex-wrap gap-1">
                <span className="flex items-center gap-1">
                  <User />
                  <strong className="underline">Author</strong>: Admin
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineDateRange /> {blog.date}
                </span>
              </div>
              <h4 className="text-lg font-semibold">
                <p className="transition duration-300">{blog.title}</p>
              </h4>
              <p className="text-sm mt-1">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
