"use client";

const FAQPageSection = () => {
  return (
    <div>
      <div className="bg-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg">
            Find answers to your questions about buying, selling, and using
            SecondHand Marketplace.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              1. How can I sell my product on SecondHand Marketplace?
            </h2>
            <p className="text-gray-600 mt-2">
              To sell a product, simply log in to your account, go to the Sell
              section, and fill in the details of the item you are selling. Be
              sure to upload clear images, provide an accurate description, and
              set a fair price.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              2. How do I know if the product is in good condition?
            </h2>
            <p className="text-gray-600 mt-2">
              All sellers are encouraged to provide clear images and an honest
              description of the items condition. We also recommend reviewing
              the product details and contacting the seller for any
              clarifications before making a purchase.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              3. How can I make a payment?
            </h2>
            <p className="text-gray-600 mt-2">
              Payments are processed securely through **SSLCommerz**. After
              selecting your item, proceed to checkout and choose SSLCommerz as
              your payment option. You’ll be redirected to a secure payment
              gateway to complete the transaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              4. Can I cancel my order?
            </h2>
            <p className="text-gray-600 mt-2">
              Orders can only be canceled within 24 hours of purchase, provided
              the seller has not yet shipped the product. To request a
              cancellation, contact customer support or use the cancellation
              option in your order details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              5. How do I track my order?
            </h2>
            <p className="text-gray-600 mt-2">
              Once your order has been shipped, you will receive a tracking
              number via email or within the platform. You can use the tracking
              number to follow the progress of your delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              6. What should I do if I receive a damaged product?
            </h2>
            <p className="text-gray-600 mt-2">
              If your product is damaged upon delivery, please contact the
              seller directly and provide clear images of the damage. In case of
              an unresolved issue, reach out to our support team, and we ll
              assist you with a return or refund process.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              7. How can I update my profile information?
            </h2>
            <p className="text-gray-600 mt-2">
              You can update your profile information by visiting your account
              settings. Here, you can modify your name, contact information, and
              payment methods.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              8. Can I list multiple products?
            </h2>
            <p className="text-gray-600 mt-2">
              Yes, you can list multiple products. Simply go to the Sell section
              and add new listings for each item you wish to sell. Keep in mind
              to provide accurate details and images for each product to ensure
              a smooth transaction process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPageSection;
