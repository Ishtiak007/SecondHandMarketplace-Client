import React, { JSX } from "react";
import {
  FaPlusCircle,
  FaShoppingCart,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

type Step = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FaPlusCircle className="text-4xl text-teal-600" />,
    title: "Post Your Product",
    description:
      "List your second-hand item in just a few clicks. Add details and photos to attract buyers.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-teal-600" />,
    title: "Buy or Browse",
    description:
      "Easily explore a variety of used items. Filter by category, price, or condition.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-teal-600" />,
    title: "Secure Transactions",
    description:
      "All deals are monitored to ensure safety and fair trading for both buyers and sellers.",
  },
  {
    icon: <FaStar className="text-4xl text-teal-600" />,
    title: "Rate & Review",
    description:
      "Help build trust in the community by rating and reviewing your experience.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-10">
          How It Works
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
