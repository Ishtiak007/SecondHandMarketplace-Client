"use client";
import Image from "next/image";
import aboutImg from "../../../assets/groceries.jpg";

const AboutUsPage = () => {
  return (
    <section className="relative w-full text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutImg}
          alt="About SecondHand Marketplace"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-400">
          About SecondNest – Your Trusted SecondHand Marketplace
        </h1>

        <p className="text-lg mb-4 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-teal-300">SecondNest</span> — a
          community-driven marketplace built on trust, value, and simplicity.
          Whether you are clearing out space or discovering hidden treasures, we
          offer a seamless platform for buying and selling used items securely
          and confidently.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Our marketplace features a wide variety of categories tailored to your
          lifestyle, including:
          <span className="block mt-2 text-sm text-teal-200">
            Home, Electronics, Books, Furniture, Tools, Office, Mobiles,
            Vehicles, Property, Pets, Clothes, Sports, Toys, Beauty, Fashion,
            Music, Gaming, Groceries, Baby, Art, Garden, Jewelry, Health,
            Watches, Travel — and more!
          </span>
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          As a user, you can effortlessly list your products for sale, manage
          your listings, and connect with interested buyers. Buying is just as
          easy—with verified sellers, smart search tools, and a user-friendly
          experience.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Our admin team ensures smooth transactions, verifies listings,
          monitors users, and safeguards the platform so you can enjoy peace of
          mind.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Whether you are a student selling textbooks, a homeowner upgrading
          furniture, or a collector finding your next treasure—SecondNest is
          your go-to secondhand hub where quality meets affordability.
        </p>

        <div className="text-center">
          <span className="text-xl font-semibold text-teal-300">
            Start your reselling journey with trust. Start with SecondNest.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
