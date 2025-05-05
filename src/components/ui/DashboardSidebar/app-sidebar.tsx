// import logo from "@/assets/Logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "../sidebar";
import Link from "next/link";
import { getCurrentUser } from "../../../services/AuthApi";
import { ArrowBigRight, Home, Route } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Profile Management",
      items: [
        {
          title: "Profile",
          url: "/user/dashboard",
          icon: ArrowBigRight,
        },
      ],
    },
    {
      title: "Manage Products",
      items: [
        { title: "Add Product", url: "/user/dashboard/products/add-product" },
        { title: "Your added Products", url: "/user/dashboard/products" },
      ],
    },
    {
      title: "Manage Buy & Sell History",
      items: [
        { title: "Sales", url: "/user/dashboard/orders/sales-history" },
        {
          title: "Purchases",
          url: "/user/dashboard/orders/purchase-history",
        },
      ],
    },
  ],
  adminNav: [
    {
      title: "Admin Panel",
      items: [
        {
          title: "Admin Panel",
          url: "/admin/dashboard/adminPanel",
        },
      ],
    },
    {
      title: "Manage All Users",
      items: [{ title: "All Users", url: "/admin/dashboard/users" }],
    },
    {
      title: "Manage All Products",
      items: [
        {
          title: "Manage All Products",
          url: "/admin/dashboard/manageAllProducts",
        },
      ],
    },
  ],
};

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const user = await getCurrentUser();
  const isAdmin = user?.role === "admin";

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex flex-col gap-0.5 leading-none ">
                  <span className="font-bold">SecondHand Marketplace</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="scrollbar-hidden">
        <SidebarGroup>
          <SidebarMenu>
            {[...data.navMain, ...(isAdmin ? data.adminNav : [])].map(
              (item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <span className="font-medium text-teal-700 my-2">
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              className="bg-zinc-100 hover:bg-zinc-200 mb-2 transition-all duration-400 ease-in-out"
                              href={subItem.url}
                            >
                              <span>
                                <Route size={10} />
                              </span>
                              {subItem.title}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <button className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 w-full flex-1 bg-zinc-50">
          <Link
            className="text-center flex items-center justify-center gap-3"
            href={"/"}
          >
            <span>
              <Home />
            </span>{" "}
            Go To Homepage
          </Link>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
