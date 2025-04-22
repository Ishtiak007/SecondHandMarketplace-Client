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
import { ChevronDown } from "lucide-react";

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

import { toast } from "sonner";
import { IUser } from "../../../../types/user";
import {
  deleteUserById,
  updateUserRoleById,
  updateUserStatusById,
} from "../../../../services/UserApi";

export default function ManageUsers({ users }: { users: IUser[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Modal state
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [userToDelete, setuserToDelete] = React.useState<string | null>(null);

  // delete a user
  const handleDeleteuser = async (id: string) => {
    try {
      const response = await deleteUserById(id);
      if (response?.success) {
        toast.success("User deleted successfully");
        closeModal(); // Close modal after deletion
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  // user status update
  const handleUpdateUserStatus = async (id: string, status: string) => {
    try {
      const response = await updateUserStatusById(id, { status });
      if (response?.success) {
        toast.success("User status updated successfully");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  // user role update
  const handleUpdateUserRole = async (id: string, role: string) => {
    try {
      const response = await updateUserRoleById(id, { role });
      if (response?.success) {
        toast.success("User role updated successfully");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  // Open the confirmation modal
  const openModal = (id: string) => {
    setuserToDelete(id);
    setIsModalOpen(true);
  };

  // Close the confirmation modal
  const closeModal = () => {
    setIsModalOpen(false);
    setuserToDelete(null);
  };

  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "identifier",
      header: "Email/Phone",
      cell: ({ row }) => (
        <div className="font-medium ">{row.getValue("identifier")}</div>
      ),
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => (
        <div className="font-medium capitalize">
          {row.getValue("country") || "N/A"}
        </div>
      ),
    },
    {
      accessorKey: "city",
      header: "City",
      cell: ({ row }) => (
        <div className="font-medium capitalize">
          {row.getValue("city") || "N/A"}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const user = row.original;
        const handleStatusChange = (newStatus: string) => {
          handleUpdateUserStatus(user._id, newStatus);
        };
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button
                variant="outline"
                className={`p-4 capitalize ${
                  user.status === "active"
                    ? "bg-green-600 text-white"
                    : user.status === "banned"
                    ? "bg-red-600 text-white"
                    : ""
                } transition-all duration-300 ease-in-out hover:scale-105`}
              >
                {user.status}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleStatusChange("active")}
                className="cursor-pointer text-green-500"
              >
                Active
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleStatusChange("banned")}
                className="cursor-pointer text-red-500"
              >
                Ban
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => {
        const user = row.original;
        const handleRoleChange = (newRole: string) => {
          handleUpdateUserRole(user._id, newRole);
        };
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button
                variant="outline"
                className={`p-4 capitalize ${
                  user.role === "admin"
                    ? "bg-blue-600 text-white"
                    : user.role === "user"
                    ? "bg-gray-600 text-white"
                    : ""
                } transition-all duration-300 ease-in-out hover:scale-105`}
              >
                {user.role}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Role</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleRoleChange("user")}
                className="cursor-pointer text-gray-700"
              >
                User
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleRoleChange("admin")}
                className="cursor-pointer text-blue-600"
              >
                Admin
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },

    {
      id: "actions",
      header: "Delete",
      enableHiding: false,
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex  justify-center">
            <button
              onClick={() => openModal(user?._id)}
              className="cursor-pointer"
            >
              <FaTrash size={18} className="mr-2 text-red-700 mx-auto" />
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: users,
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
        Manage All Users
      </h1>
      <div className="w-[90%] mx-auto p-4 border rounded-md shadow-xl">
        <div className="flex gap-4 items-center ">
          <Input
            placeholder="Filter user by Email..."
            value={
              (table.getColumn("identifier")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("identifier")?.setFilterValue(event.target.value)
            }
            className="w-1/2 mx-auto"
          />
        </div>
        <div className="rounded-md border mt-4">
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
                      <TableCell key={cell.id}>
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
                    No users data found from Database.
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
      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-20 flex justify-center items-center z-20 transition-opacity duration-300 ease-out">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg transform transition-all duration-300 ease-out opacity-100 translate-y-0">
            <h3 className="text-xl font-semibold">Confirm Deletion</h3>
            <p className="mt-4 text-sm text-gray-700">
              Are you sure you want to delete this user? This action cannot be
              undone.
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
                  if (userToDelete) {
                    handleDeleteuser(userToDelete);
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
