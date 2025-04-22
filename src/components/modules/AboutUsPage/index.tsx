"use client";
import Image from "next/image";

import aboutUsImage from "../../../assets/CartCar.jpg";
import aboutUsImage2 from "../../../assets/groceries.jpg";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div>
      <div className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-4 text-base">
            Welcome to SecondHand Marketplace – A platform for buying and
            selling pre-owned products with ease and trust.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="lg:flex justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold text-teal-800">Our Story</h2>
            <p className="text-base text-gray-600 mt-4">
              SecondHand Marketplace was founded with a simple mission: to make
              buying and selling pre-owned goods easier, more secure, and more
              accessible. Whether you are decluttering your home, upgrading your
              electronics, or simply finding great deals, we’re here to help you
              get the best value while making a positive impact on the
              environment.
            </p>
            <p className="text-base text-gray-600 mt-4">
              We believe that second-hand items are not only affordable but also
              have unique stories to tell. At SecondHand Marketplace, we strive
              to create a trusted community where buyers and sellers can
              interact with confidence, knowing that they’re supporting
              sustainability.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src={aboutUsImage}
              alt="Our Story"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="lg:flex justify-between items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={aboutUsImage2} // Replace this with your actual image source
              alt="Our Values"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold text-teal-800">
              Our Core Values
            </h2>
            <p className="text-base text-gray-600 mt-4">
              At SecondHand Marketplace, we believe in values that guide
              everything we do. These values not only define our platform but
              also reflect our commitment to building a community that is
              sustainable, secure, and trustworthy.
            </p>

            {/* Core Values List */}
            <div className="mt-8 space-y-6">
              {/* Value 1: Sustainability */}
              <div>
                <h3 className="text-lg font-semibold text-teal-800">
                  Sustainability
                </h3>
                <p className="text-base text-gray-600 mt-2">
                  We are committed to reducing waste and promoting the reuse of
                  products. By supporting second-hand goods, we’re helping to
                  build a more sustainable future for everyone.
                </p>
              </div>

              {/* Value 2: Security */}
              <div>
                <h3 className="text-lg font-semibold text-teal-800">
                  Security
                </h3>
                <p className="text-base text-gray-600 mt-2">
                  We ensure secure transactions by implementing SSL encryption,
                  giving buyers and sellers confidence that their data and
                  payments are protected.
                </p>
              </div>

              {/* Value 3: Community */}
              <div>
                <h3 className="text-lg font-semibold text-teal-800">
                  Community
                </h3>
                <p className="text-base text-gray-600 mt-2">
                  We believe in the strength of community-driven commerce. Our
                  platform brings people together, allowing buyers and sellers
                  to connect, collaborate, and support each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-800">Our Mission</h2>
          <p className="text-base text-gray-600 mt-4">
            At SecondHand Marketplace, we are driven by the belief that
            second-hand products are not just affordable, but also sustainable.
            Our mission is to provide a trusted, secure, and eco-friendly
            platform for users to buy and sell pre-owned goods.
          </p>

          {/* Three Core Values Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Value 1: Sustainability */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-4xl text-green-600 mb-4">♻️</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Sustainability
              </h3>
              <p className="text-gray-600 mt-2">
                By buying and selling second-hand products, we are reducing
                waste and contributing to a more sustainable future. Our
                platform encourages recycling, upcycling, and reusing.
              </p>
            </div>

            {/* Value 2: Security */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-4xl text-blue-600 mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-800">Security</h3>
              <p className="text-gray-600 mt-2">
                We prioritize user safety and privacy. Our platform provides
                secure transactions with SSL encryption and reliable payment
                methods, ensuring both buyers and sellers are protected.
              </p>
            </div>

            {/* Value 3: Community */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-4xl text-orange-600 mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800">Community</h3>
              <p className="text-gray-600 mt-2">
                We believe in the power of community-driven commerce. Our
                marketplace connects people from all walks of life, fostering
                trust, collaboration, and mutual benefit for buyers and sellers
                alike.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white mx-auto">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-teal-800">
            Meet the main Team
          </h2>
          <p className="text-base text-gray-600 mt-4">
            Our dedicated team works hard to bring you the best second-hand
            marketplace experience!
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <Image
                src={aboutUsImage}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Ishtiak Ahmed
              </h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <Image
                src={aboutUsImage}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Sayma Tarannum
              </h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
            <div className="text-center">
              <Image
                src={aboutUsImage}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Ruhit Been Siddiq
              </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-teal-800">Get in Touch</h2>
          <p className="text-base text-gray-600 mt-4">
            Have more questions or want to know more about SecondHand
            Marketplace? Feel free to reach out to our support team.
          </p>
          <Link href={"/contact"}>
            <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white mx-auto">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
