"use client";
import Image from "next/image";
import { toast } from "sonner";
import { TProduct } from "../../../types/product";
import { IUser } from "../../../types/user";
import Container from "../../shared/Container";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { addOrder } from "../../../services/OrderApi";
import { Lock } from "lucide-react";

export default function CheckoutPage({
  product,
  profile,
}: {
  product: TProduct;
  profile: IUser;
}) {
  const handleConfirmPay = async () => {
    const itemID = product._id;
    try {
      const response = await addOrder({ itemID });
      if (response?.success) {
        toast.success("Your order placed successfully");
        if (response?.data?.paymentUrl) {
          window.location.href = response.data.paymentUrl;
        }
      } else {
        toast.error(response?.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container className="my-5">
      <div className=" mx-auto  flex gap-4">
        <div className="lg:w-[40%] space-y-4 overflow-y-auto max-h-screen scrollbar-hidden shadow-md rounded-md">
          <div className="p-6">
            <p className="text-2xl font-semibold text-teal-700">
              SecondHand Marketplace - Terms & Conditions
            </p>

            <div className="space-y-6 mt-6">
              <section>
                <p className="text-xl font-semibold text-gray-800">
                  1. Introduction
                </p>
                <p className="text-sm text-gray-600">
                  Welcome to SecondHand Marketplace, your trusted platform for
                  buying and selling pre-owned products. These Terms &
                  Conditions govern your access to and use of our services. By
                  using this platform, you agree to comply with these terms.
                </p>
              </section>

              <section>
                <p className="text-xl font-semibold text-gray-800">
                  2. User Responsibilities
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                  <li>
                    Ensure that all products listed for sale are accurately
                    described, including their condition and any defects.
                  </li>
                  <li>
                    Provide truthful and accurate contact details for
                    communication and transaction purposes.
                  </li>
                  <li>
                    Abide by the laws of your country or region when listing or
                    purchasing products.
                  </li>
                  <li>
                    Do not engage in fraudulent activities, misrepresent
                    products, or attempt to deceive buyers or sellers.
                  </li>
                </ul>
              </section>

              <section>
                <p className="text-xl font-semibold text-gray-800">
                  3. Product Listings & Sales
                </p>
                <p className="text-sm text-gray-600">
                  Products listed for sale must be used items. All items should
                  be described clearly, including their condition, age, and any
                  defects. SecondHand Marketplace is not responsible for any
                  disputes regarding the condition of the product upon delivery.
                </p>
              </section>

              <section>
                <p className="text-xl font-semibold text-gray-800">
                  4. Payment Terms
                </p>
                <p className="text-sm text-gray-600">
                  Payments for products must be made in full before the item is
                  shipped. We offer secure payment methods, but all transactions
                  are final. Please make sure the payment amount matches the
                  listed price to avoid issues.
                </p>
              </section>

              <section>
                <p className="text-xl font-semibold text-gray-800">
                  5. Return and Refund Policy
                </p>
                <p className="text-sm text-gray-600">
                  We understand that purchasing second-hand goods can sometimes
                  be tricky. Our platform offers a 7-day return policy, provided
                  the item is returned in the same condition as it was received.
                  Refunds are processed after the item is returned and verified.
                </p>
              </section>

              <section>
                <p className="text-xl font-semibold text-gray-800">
                  6. Privacy Policy
                </p>
                <p className="text-sm text-gray-600">
                  Your privacy is very important to us. We collect only the
                  necessary personal information to facilitate transactions and
                  improve your experience. Please review our{" "}
                  <a
                    href="#"
                    className="text-blue-700 font-medium hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  for more details.
                </p>
              </section>

              <section>
                <p className="text-xl font-semibold text-gray-800">
                  7. Limitation of Liability
                </p>
                <p className="text-sm text-gray-600">
                  SecondHand Marketplace is not responsible for any damages,
                  losses, or disputes arising from transactions between buyers
                  and sellers. All transactions are conducted between users, and
                  we recommend exercising caution when purchasing or selling
                  second-hand products.
                </p>
              </section>

              <section>
                <p className="text-xl font-semibold text-gray-800">
                  8. Modifications to Terms
                </p>
                <p className="text-sm text-gray-600">
                  SecondHand Marketplace reserves the right to modify or update
                  these Terms & Conditions at any time. Any changes will be
                  posted here, and your continued use of the platform
                  constitutes acceptance of the revised terms.
                </p>
              </section>
            </div>

            <div className="mt-8 text-sm text-center text-gray-600">
              <p>
                By using SecondHand Marketplace, you agree to abide by these
                Terms & Conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[60%] space-y-6">
          <div className="bg-white p-6  shadow-md rounded-md">
            <div className="space-y-5">
              {/* Product Details */}
              <div className="lg:flex justify-center items-center gap-6">
                {product?.images && (
                  <Image
                    src={product?.images?.[0]}
                    alt="Product Image"
                    width={150}
                    height={150}
                    className="rounded-md shadow-md"
                  />
                )}
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {product?.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    Category: {product?.category}
                  </p>
                  <p className="text-sm text-gray-500">
                    Warranty: {product?.warranty}
                  </p>
                </div>
              </div>

              {/* Total Items & Price */}
              <div className="text-sm text-gray-600 space-y-2 text-center">
                <p className="text-xl font-semibold text-teal-800 mt-2">
                  Price: BDT {product?.price} ৳
                </p>
              </div>

              <hr className="border-t border-gray-300" />

              <div className="flex justify-around items-start gap-4">
                {/* Seller  */}
                <div>
                  <p className="font-semibold text-lg text-gray-800">Seller</p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      <strong>Name:</strong> {product?.userID?.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {product?.userID?.identifier}
                    </p>
                    <p>
                      <strong>Seller Location:</strong> {product?.location}
                    </p>
                    <p>
                      <strong>Seller Number:</strong> {product?.contactNumber}
                    </p>
                  </div>
                </div>

                {/* <div className="divider border-gray-300" /> */}

                <div>
                  {/* Buyer  */}
                  <p className="font-semibold text-lg text-gray-800">
                    Buyer (You)
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      <strong>Name:</strong> {profile?.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {profile?.identifier}
                    </p>
                    {profile?.city && (
                      <p>
                        <strong>Location:</strong> {profile?.city}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-6" />
            <div className="bg-white rounded-lg my-5 ">
              <div className="flex items-center space-x-4">
                {/* Icon */}

                <div>
                  <p className="text-lg font-semibold flex items-center gap-3">
                    <Lock size={18} />
                    Secure Checkout - SSL Encrypted
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Ensuring your financial and personal details are secure
                    during every transaction.
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-6" />

            {/* Agreement Checkbox & Pay Button */}
            <div className="space-y-4">
              <Label className="flex items-center space-x-3 text-sm">
                <Checkbox className="mr-2 cursor-pointer appearance-none w-5 h-5 border-2 border-teal-700 rounded-sm checked:bg-teal-700 checked:border-teal-700 focus:ring-0" />
                <span>
                  I agree to the{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </Label>

              <Button
                onClick={handleConfirmPay}
                className="w-full hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white"
              >
                Confirm Order & Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
