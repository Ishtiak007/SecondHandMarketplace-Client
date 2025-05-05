"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { getAllProducts } from "../../../services/ProductApi";
import { TProduct } from "../../../types/product";
import NavigationLink from "../../shared/NavigationLink";

const categories: { label: string; slug: string }[] = [
  { label: "Home", slug: "home" },
  { label: "Electronics", slug: "electronics" },
  { label: "Books", slug: "books" },
  { label: "Furniture", slug: "furniture" },
  { label: "Tools", slug: "tools" },
  { label: "Office", slug: "office" },
  { label: "Mobiles", slug: "mobiles" },
  { label: "Vehicles", slug: "vehicles" },
  { label: "Property", slug: "property" },
  { label: "Pets", slug: "pets" },
  { label: "Cloths", slug: "cloths" },
  { label: "Sports", slug: "sports" },
  { label: "Toys", slug: "toys" },
  { label: "Beauty", slug: "beauty" },
  { label: "Fashion", slug: "fashion" },
  { label: "Music", slug: "music" },
  { label: "Gaming", slug: "gaming" },
  { label: "Groceries", slug: "groceries" },
  { label: "Baby", slug: "baby" },
  { label: "Art", slug: "art" },
  { label: "Garden", slug: "garden" },
  { label: "Jewelry", slug: "jewelry" },
  { label: "Health", slug: "health" },
  { label: "Watches", slug: "watches" },
  { label: "Travel", slug: "travel" },
];

export const MegaMenu = () => {
  const [products, setProducts] = useState<TProduct[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (err: any) {
        toast.error(`Something went wrong! ${err.message || ""}`);
      }
    }
    fetchData();
  }, []);

  const sortedProducts = products?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="relative z-50 w-full bg-white shadow-xl rounded-xl p-4 lg:p-6 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Categories Section */}
        <div className="max-h-[300px] overflow-y-auto pr-2">
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {categories.map(({ label, slug }) => (
              <li key={slug}>
                <NavigationLink route={label} path={`/category/${slug}`} />
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Arrivals */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Recent Arrivals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {sortedProducts?.slice(0, 6).map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-2">
                      {product.title}
                    </p>
                    <p className="text-sm text-teal-600">BDT {product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
