"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-teal-800 p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <Link href={"/"}>
            <h1 className="lg:text-lg font-semibold">
              SecondHand<span className="text-teal-300">Marketplace</span>
            </h1>
          </Link>
          <p className="w-[80%] lg:w-[80%] mt-3 text-center">
            SecondHand Marketplace: Your Go-To Platform for Buying and Selling
            Pre-Loved Products
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Free Delivery on Select Products
            </a>
            <a href="" className="text-sm hover:underline">
              Secure Payment Options
            </a>
            <a href="" className="text-sm hover:underline">
              Seller Support & Assistance
            </a>
            <a href="" className="text-sm hover:underline">
              Product Warranty Information
            </a>
            <a href="" className="text-sm hover:underline">
              Product Listing for Sellers
            </a>
          </div>
        </div>
        {/* .......Customer Support....... */}
        <div>
          <div className="font-bold mb-6">Customer Support</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Help Center
            </a>
            <a href="" className="text-sm hover:underline">
              Return & Refund Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Shipping & Delivery Information
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

        <div>
          <div className="font-bold mb-3">Contact Information</div>
          <h2 className="text-sm mb-4">support@secondhandmarketplace.com</h2>
          <h2 className="text-sm">+8801521742729</h2>
          <div>
            <div className="font-bold my-6">
              <h1>Follow Us (Social Media)</h1>

              <div className="flex gap-4 mt-4">
                <a href="" className="hover:scale-110 text-xl">
                  <BsFacebook />
                </a>
                <a href="" className="hover:scale-110 text-xl">
                  <BsInstagram />
                </a>
                <a href="" className="hover:scale-110 text-xl">
                  <BsTwitter />
                </a>
                <a href="" className="hover:scale-110 text-xl">
                  <BsPinterest />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
