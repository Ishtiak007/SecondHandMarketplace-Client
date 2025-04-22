/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
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
import moment from "moment-timezone";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../ui/table";
import { TOrder } from "../../../../../types/order";

export default function PurchaseHistory({
  purchaseHistory,
}: {
  purchaseHistory: any;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  console.log(purchaseHistory);

  const columns: ColumnDef<TOrder>[] = [
    {
      accessorKey: "transactionId",
      header: "Transaction ID",
      cell: ({ row }) => (
        <div className="font-medium ">{row.getValue("transactionId")}</div>
      ),
    },
    {
      accessorKey: "sellerID.name",
      header: "Seller",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.sellerID?.name || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "sellerID.identifier",
      header: "Seller Email",
      cell: ({ row }) => {
        return (
          <div className="font-medium ">
            {row.original.sellerID?.identifier || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "itemID.title",
      header: "Product",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">
            {row.original.itemID?.title || "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Date",
      cell: ({ row }) => {
        const createdAt = row.getValue("createdAt");
        const formattedDate = createdAt
          ? moment(createdAt).tz("Asia/Dhaka").format("YYYY-MMM-DD")
          : "N/A";

        return <div className="font-medium">{formattedDate}</div>;
      },
    },

    {
      accessorKey: "itemID.price",
      header: "Price",
      cell: ({ row }) => {
        return (
          <div className="font-medium ">
            BDT {row.original.itemID?.price || "N/A"}
          </div>
        );
      },
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div className="font-medium capitalize">{row.getValue("status")}</div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: purchaseHistory,
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
        All Purchases History
      </h1>
      <div className="w-[95%] mx-auto p-4 border rounded-md shadow-xl">
        <div className="flex gap-4 items-center ">
          <Input
            placeholder="Filter sales history by Transaction ID"
            value={
              (table.getColumn("transactionId")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("transactionId")
                ?.setFilterValue(event.target.value)
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
                      <TableCell className="border-t-2 " key={cell.id}>
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
                    No any history data found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center items-center gap-5 my-7">
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
              className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-800 hover:text-white  my-4 mt-2 bg-teal-700 text-white"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
