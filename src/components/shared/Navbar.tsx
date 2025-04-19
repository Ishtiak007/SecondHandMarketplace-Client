"use client";
import { Button } from "../ui/button";
import {
  Book,
  Building2,
  HelpCircle,
  Home,
  LayoutDashboard,
  LogIn,
  LogOutIcon,
  Mail,
  ShoppingBag,
  UserCircle2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavigationLink from "./NavigationLink";
import { RootState } from "../../redux/store";
import Container from "./Container";
import { useAppDispatch } from "../../redux/hooks";
import { useRouter } from "next/navigation";
import { logout } from "../../redux/features/authSlice";
import { logoutFromCookie } from "../../services/AuthApi";
import { toast } from "sonner";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.auth?.user);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    dispatch(logout());
    await logoutFromCookie();
    toast.success("You have been logged out successfully");
    router.push("/");
  };

  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        isScrolled
          ? "lg:fixed lg:top-0 lg:left-0 lg:w-full bg-opacity-75 lg:z-50 lg:shadow-md"
          : "lg:relative"
      }`}
    >
      <Container>
        <nav className="mt-4">
          <div className="mt-4 flex justify-end lg:justify-between lg:mb-4">
            <div>SecondHand Marketplace</div>
            {/* menubar */}
            <ul className="hidden lg:flex gap-4 text-lg">
              <li>
                <NavigationLink route="Home" path="/" />
              </li>
              <li>
                <NavigationLink route="Products" path="/products" />
              </li>
              <li>
                <NavigationLink route="About Us" path="/aboutUs" />
              </li>
              <li>
                <NavigationLink route="Contact Us" path="/contactUs" />
              </li>
              <li>
                <NavigationLink route="Blogs" path="/blogs" />
              </li>
              <li>
                <NavigationLink route="FAQs" path="/faq" />
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <Link href="/wishlist">
                <Button variant="outline" className="cursor-pointer">
                  White Lists
                </Button>
              </Link>
              <Link href="/user/dashboard">
                <Button variant="outline" className="cursor-pointer">
                  Dashboard
                </Button>
              </Link>
              {user && (
                <div onClick={handleLogout}>
                  <span className="flex gap-2 items-center text-base cursor-pointer">
                    <LogOutIcon className="w-6 h-6" />
                    Logout
                  </span>
                </div>
              )}

              {/* profile dropdown visible for large devices */}
              {!user && (
                <div className="hidden lg:flex">
                  <Link href={"/login"}>
                    <span className="flex gap-2 items-center text-base cursor-pointer">
                      <LogIn className="w-6 h-6" />
                      Login
                    </span>
                  </Link>
                </div>
              )}

              {/* full dropdown visible for small devices */}
              <div className="lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="cursor-pointer">
                    <UserCircle2 size={28} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Explore</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link
                          href="/"
                          className="flex gap-2 text-base items-center"
                        >
                          <Home className="w-6 h-6  " />
                          Home
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/products"
                          className="flex gap-2 text-base items-center"
                        >
                          <ShoppingBag className="w-6 h-6" />{" "}
                          {/* Browse Products */}
                          Products
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/aboutUs"
                          className="flex gap-2 text-base items-center"
                        >
                          <Building2 className="w-6 h-6" />
                          About Us
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/contactUs"
                          className="flex gap-2 text-base items-center"
                        >
                          <Mail className="w-6 h-6" />
                          Contact Us
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/faq"
                          className="flex gap-2 text-base items-center"
                        >
                          <HelpCircle className="w-6 h-6" />
                          FAQs
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/blogs"
                          className="flex gap-2 text-base items-center"
                        >
                          <Book className="w-6 h-6" />
                          Blogs
                        </Link>
                      </DropdownMenuItem>
                      {user && (
                        <Fragment>
                          <DropdownMenuItem>
                            <Link
                              href="/user/dashboard"
                              className="flex gap-2 text-base items-center"
                            >
                              <LayoutDashboard className="w-6 h-6" />
                              Dashboard
                            </Link>
                          </DropdownMenuItem>

                          <Separator />
                        </Fragment>
                      )}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
