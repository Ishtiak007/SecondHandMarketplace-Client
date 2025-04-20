import { Fragment } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/ui/DashboardSidebar/app-sidebar";
import DynamicBreadcrumb from "../../components/shared/Dashboard/DynamicBreadcrumb";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex lg:fixed lg:z-20 lg:bg-white lg:w-full h-16 shrink-0 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <DynamicBreadcrumb />
            </div>
          </header>
          <div className="my-15">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </Fragment>
  );
}
