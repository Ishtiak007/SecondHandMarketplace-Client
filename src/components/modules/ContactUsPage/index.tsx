"use client";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-teal-800">
            Contact With Us
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Have any questions or need help? We’re here to assist you. Reach out
            to us through the form below, and we ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 shadow-md p-3 rounded-md">
          <div className="text-center">
            <div className="text-3xl  mb-4">📧</div>
            <h3 className="text-xl font-semibold text-teal-800">Email</h3>
            <p className="text-gray-600 mt-2">
              support@secondhandmarketplace.com
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl  mb-4">📞</div>
            <h3 className="text-xl font-semibold text-teal-800">Phone</h3>
            <p className="text-gray-600 mt-2">+1 (800) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="text-3xl  mb-4">📍</div>
            <h3 className="text-xl font-semibold text-teal-800">Our Address</h3>
            <p className="text-gray-600 mt-2">
              123 SecondHand St., Cityname, Country
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="my-16 shadow rounded-md p-4">
          <h3 className="text-2xl font-semibold text-teal-800 text-center">
            Get In Touch
          </h3>
          <p className="text-base text-gray-600 text-center mt-2">
            Fill out the form below, and our support team will get back to you
            as soon as possible.
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-lg font-medium text-gray-800">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 p-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-medium text-gray-800">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="mt-2 p-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-lg font-medium text-gray-800">
                  Your Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  className="mt-2 p-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white mx-auto my-5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
