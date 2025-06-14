"use client";
import ProductCard from "../../ui/core/ProductCard";
import SidebarFilters from "./SidebarFilters";
import Container from "../../shared/Container";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useState } from "react";
import { Button } from "../../ui/button";
import ProductSkeleton from "../../ui/core/skeleton/ProductSkeleton";
import { TProduct } from "../../../types/product";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export default function AllProducts({ products }: { products: TProduct[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = products
    ?.filter((product) =>
      [product.title, product.category, product.location].some((field) =>
        field?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    ?.filter((product) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(product.category)
    )
    ?.filter((product) =>
      selectedConditions.length === 0
        ? true
        : selectedConditions.includes(product.condition)
    )
    ?.filter((product) =>
      selectedDistricts.length === 0
        ? true
        : selectedDistricts.includes(product.location)
    )
    ?.filter((product) => (isAvailable ? product.status === "available" : true))
    ?.sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  // pagination
  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);
  const paginatedProducts = filteredProducts?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <div className="lg:flex gap-4">
        <div className="lg:sticky lg:top-0 lg:z-10 border rounded-md p-4">
          <h1 className="text-teal-800 font-semibold text-lg text-center">
            Filters
          </h1>
          <Select onValueChange={setSortOrder}>
            <SelectTrigger className="w-full my-4">
              <SelectValue placeholder="Sort By Ascending and Descending" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low-to-high">Ascending order</SelectItem>
              <SelectItem value="high-to-low">Descending order</SelectItem>
            </SelectContent>
          </Select>
          <SidebarFilters
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedConditions={selectedConditions}
            setSelectedConditions={setSelectedConditions}
            selectedDistricts={selectedDistricts}
            setSelectedDistricts={setSelectedDistricts}
            setIsAvailable={setIsAvailable}
          />
        </div>
        <div className="flex-1 max-h-[calc(100vh-85px)] overflow-y-auto scrollbar-hidden">
          {/* Search & sort bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <Input
              type="text"
              placeholder="You can search products by title, category or location"
              className="w-full md:w-1/2 my-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link href="/bookmarks">
              <Button
                variant="outline"
                className="hover:cursor-pointer border border-neutral-300 lg:px-4 flex lg:py-[6px] gap-3 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white bg-zinc-50 text-teal-800 font-semibold"
              >
                Your Bookmarked Lists <Bookmark />
              </Button>
            </Link>
          </div>

          {/* Product cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 flex-1 overflow-y-scroll"
            style={{
              scrollbarWidth: "none" /* for Firefox */,
              msOverflowStyle: "none" /* for IE and Edge */,
            }}
          >
            {paginatedProducts?.length === 0
              ? Array.from({ length: 12 }).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))
              : paginatedProducts?.map((product) => (
                  <ProductCard key={product?._id} product={product} />
                ))}
          </div>

          {/* Pagination actions */}
          <div className="flex justify-center items-center gap-5 my-12">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              size="sm"
              className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white"
            >
              Previous
            </Button>
            <span className="text-sm font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              size="sm"
              className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
