import { AppSidebar } from "@/components/app-sidebar";
import { ProfileMenu } from "@/components/modules/Dashboard/ProfileMenu";
import DynamicBreadcrumb from "@/components/shared/Dashboard/DynamicBreadcrumb";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Fragment } from "react";

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
          <header className="flex h-16 shrink-0 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <DynamicBreadcrumb />
            </div>

            {/* Profile Icon - Right Side */}
            <div className="ml-auto">
              <ProfileMenu />
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </Fragment>
  );
}
