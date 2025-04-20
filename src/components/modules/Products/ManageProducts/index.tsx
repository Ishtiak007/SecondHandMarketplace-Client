/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { FaTrash } from "react-icons/fa";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronDown,
  EditIcon,
} from "lucide-react";

import { Button } from "../../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Input } from "../../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { TProduct } from "../../../../types/product";
import {
  deleteProductById,
  updateProductStatusById,
} from "../../../../services/ProductApi";

export default function ManageAllProducts({
  products,
}: {
  products: TProduct[];
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Modal state
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [productToDelete, setProductToDelete] = React.useState<string | null>(
    null
  );

  // delete a product
  const handleDeleteProduct = async (id: string) => {
    try {
      const response = await deleteProductById(id);
      if (response?.success) {
        toast.success("Product deleted successfully");
        closeModal(); // Close modal after deletion
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  // product status update
  const handleUpdateProductStatus = async (id: string, status: string) => {
    try {
      const response = await updateProductStatusById(id, { status });
      if (response?.success) {
        toast.success("Product status updated successfully");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  // Open the confirmation modal
  const openModal = (id: string) => {
    setProductToDelete(id);
    setIsModalOpen(true);
  };

  // Close the confirmation modal
  const closeModal = () => {
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  const columns: ColumnDef<TProduct>[] = [
    {
      accessorKey: "images",
      header: "Image",
      cell: ({ row }) => {
        const images = row.getValue("images") as string[];
        const firstImage = images?.[0];

        return firstImage ? (
          <div className="w-[60px] h-[60px] relative overflow-hidden rounded-lg ">
            <Image
              src={firstImage}
              alt="Thumbnail Image"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200">
            <span className="text-xs text-gray-500">No Image</span>
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="font-medium capitalize">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => {
        const colors = [
          "#169976",
          "#4CAF50",
          "#A02334",
          "#2196F3",
          "#F19ED2",
          "#FF9800",
          "#9C27B0",
          "#03A9F4",
          "#96EFFF",
          "#FF5722",
          "#673AB7",
          "#FFB6D9",
          "#607D8B",
          "#8BC34A",
          "#FFC107",
          "#CDDC39",
          "#009688",
          "#9681EB",
          "#804676",
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div className="flex items-center">
            <span
              style={{ color: randomColor }}
              className="px-3 py-1 rounded-md text-white text-sm font-medium capitalize"
            >
              {row.getValue("category")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "condition",
      header: "Condition",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.getValue("condition")}
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.getValue("price")} ৳
          </div>
        );
      },
    },

    {
      accessorKey: "negotiable",
      header: "Negotiable",
      cell: ({ row }) => {
        const negotiable = row.getValue("negotiable");

        return (
          <div className="font-medium capitalize">
            {negotiable ? (negotiable as string) : "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const product = row.original;
        const handleStatusChange = (newStatus: string) => {
          handleUpdateProductStatus(product._id, newStatus);
        };
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button
                variant="outline"
                className={`p-4 capitalize ${
                  product.status === "available"
                    ? "bg-green-600 text-white"
                    : product.status === "sold"
                    ? "bg-red-600 text-white"
                    : ""
                } transition-all duration-300 ease-in-out hover:scale-105`}
              >
                {product.status}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleStatusChange("available")}
                className="cursor-pointer text-green-600"
              >
                Available
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleStatusChange("sold")}
                className="cursor-pointer text-red-600"
              >
                Sold
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      id: "actions",
      header: "Update / Delete",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original;
        return (
          <div className="flex items-center justify-center gap-7">
            <Link
              href={`/user/dashboard/products/update-product/${product?._id}`}
            >
              <EditIcon size={18} className=" text-green-700" />
            </Link>

            <div
              onClick={() => openModal(product?._id)} // Open modal on delete button click
              className="cursor-pointer"
            >
              <FaTrash size={18} className=" text-red-700" />
            </div>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: products,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
  });

  return (
    <div>
      <h1 className="text-teal-800 text-center text-lg my-5 font-semibold">
        Manage All Products
      </h1>
      <div className="w-[90%] mx-auto p-4 border rounded-md shadow-xl">
        <div className="flex gap-4 items-center ">
          <Input
            placeholder="Filter products by title"
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="w-1/2 mx-auto"
          />
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      className="text-teal-700 font-semibold uppercase"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className="border-t-2" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center "
                  >
                    No data found from Database.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ArrowBigLeft />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ArrowBigRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-20 flex justify-center items-center z-20 transition-opacity duration-300 ease-out">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg transform transition-all duration-300 ease-out opacity-100 translate-y-0">
            <h3 className="text-xl font-semibold">Confirm Deletion</h3>
            <p className="mt-4 text-sm text-gray-700">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="mt-6 flex justify-between">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 rounded-md text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (productToDelete) {
                    handleDeleteProduct(productToDelete);
                  }
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
