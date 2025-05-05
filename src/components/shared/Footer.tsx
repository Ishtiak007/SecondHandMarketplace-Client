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
    <motion.footer
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-teal-800 text-white px-6 py-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="text-center sm:text-left">
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-semibold">
              SecondHand
              <span className="text-teal-300">Marketplace</span>
            </h1>
          </Link>
          <p className="mt-3 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            Your Go-To Platform for Buying and Selling Pre-Loved Products
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold text-base mb-4">Services</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Free Delivery on Select Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Secure Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Seller Support & Assistance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Product Warranty Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Product Listing for Sellers
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="font-bold text-base mb-4">Customer Support</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return & Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Delivery Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="font-bold text-base mb-4">Contact</h2>
          <p className="text-sm mb-2">ishtiak.sparrow98@gmail.com</p>
          <p className="text-sm mb-6">+8801521742729</p>

          <h2 className="font-bold text-base mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:scale-110 transition-transform">
              <BsFacebook />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <BsInstagram />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <BsTwitter />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-teal-600 pt-4 text-center text-sm text-teal-200">
        © {new Date().getFullYear()} SecondHand Marketplace. All rights
        reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
