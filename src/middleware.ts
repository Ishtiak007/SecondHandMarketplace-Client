import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthApi";

type Role = keyof typeof roleBasedPrivateRoutes;

export const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  user: [
    /^\/user/,
    /^\/checkout/,
    /^\/profile/,
    /^\/dashboard\/user\/products/,
    /^\/dashboard\/user\/products\/add-product/,
    /^\/dashboard\/user\/products\/update-product/,
    /^\/dashboard\/user\/orders\/purchase-history/,
    /^\/dashboard\/user\/orders\/sales-history/,
  ],

  admin: [
    /^\/admin/,
    /^\/user/,
    /^\/checkout/,
    /^\/profile/,
    /^\/dashboard\/user\/products/,
    /^\/dashboard\/user\/products\/add-product/,
    /^\/dashboard\/user\/products\/update-product/,
    /^\/dashboard\/user\/orders\/purchase-history/,
    /^\/dashboard\/user\/orders\/sales-history/,
    /^\/dashboard\/admin\/users/,
  ],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  console.log(userInfo);

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `https://second-hand-marketplace-client-seven.vercel.app/login`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: [
    "/user/:page",
    "/checkout",
    "/profile",
    "/user/dashboard/products",
    "/user/dashboard/products/add-product",
    "/user/dashboard/products/update-product",
    "/user/dashboard/orders/purchase-history",
    "/user/dashboard/orders/sales-history",
    "/admin/dashboard/users",
  ],
};
