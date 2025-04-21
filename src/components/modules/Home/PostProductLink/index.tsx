import Image from "next/image";
import Link from "next/link";
import image from "../../../../assets/sale.jpg";

const PostYourProduct = () => {
  return (
    <div className="linkItemImg bg-fixed text-white pt-8 my-20">
      <div className="md:flex justify-center items-center p-4">
        <div className="flex-1">
          <Image
            className="lg:w-4/5 mx-auto rounded-md"
            src={image}
            alt="Post Product"
          />
        </div>
        <div className="flex-1">
          <p className="uppercase lg:text-4xl font-bold">
            Want to Post Your Product?{" "}
          </p>
          <p className="my-3 text-white">
            Selling your pre-loved items has never been easier! Whether you are
            cleaning out your closet or upgrading your electronics, our platform
            makes it simple to list your products and connect with potential
            buyers. Post your product today and give it a second life in someone
            elses hands.
          </p>
          <Link href="/user/dashboard/products/add-product">
            <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white">
              Post Your Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostYourProduct;
