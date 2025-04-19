"use client";
import { Button } from "../ui/button";
import {
  Book,
  Building2,
  HelpCircle,
  Home,
  LayoutDashboard,
  LogInIcon,
  LogOutIcon,
  Mail,
  Phone,
  ShoppingBag,
  UserCircle2,
  UserPlus,
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
import { logoutFromCookie } from "../../services/Auth";
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
      className={` ${
        isScrolled
          ? "lg:fixed lg:top-0 lg:left-0 lg:w-full lg:bg-[#FAF6F2] lg:z-50 lg:shadow-md"
          : ""
      }`}
    >
      <Container>
        <nav className="mt-4">
          <div
            className={`flex lg:items-center gap-4 flex-col lg:flex-row lg:justify-between ${
              isScrolled ? "hidden" : ""
            }`}
          >
            {/* left side */}

            {/* right side */}
            <div className="space-y-4">
              {/* contact info */}
              <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-4">
                <p className="text-sm">
                  <Phone size={18} className="inline text-[#F59E0B]" /> Contact:
                  +880 131 577 3424
                </p>
                <p className="text-sm">
                  <Mail size={18} className="inline text-[#F59E0B]" />{" "}
                  support@resellbd.com
                </p>
              </div>

              {/* signin button */}
              <div className="  flex flex-col md:flex-row md:justify-end gap-2 md:gap-4">
                <Link href="/login" className="block ">
                  <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] cursor-pointer">
                    <LogInIcon size={18} />
                    SignIn With Your Account
                  </Button>
                </Link>
                <Link href="/register" className="block ">
                  <Button
                    variant="outline"
                    className="text-[#1F2937] cursor-pointer"
                  >
                    <UserPlus size={18} />
                    Create A New Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4  flex justify-end lg:justify-between lg:mb-4">
            {/* menubar */}

            <ul className="hidden lg:flex gap-4 text-lg">
              <li>
                <NavigationLink route="Home" path="/" />
              </li>
              <li>
                <NavigationLink route="Products" path="/products" />
              </li>
              <li className="group relative">
                {/* MegaMenu will open when hovering over Products */}
                <NavigationLink route="Discover" path="#" />
              </li>
              <li>
                <NavigationLink route="About Us" path="/aboutUs" />
              </li>
              <li>
                <NavigationLink route="Contact Us" path="/contactUs" />
              </li>
              <li>
                <NavigationLink route="FAQs" path="/faq" />
              </li>
              <li>
                <NavigationLink route="Blogs" path="/blogs" />
              </li>
            </ul>
            {/* wishlist and profile */}
            <div className="flex items-center gap-4">
              <Link href="/wishlist">
                <Button variant="outline" className="cursor-pointer">
                  Whiteicon
                </Button>
              </Link>
              <div onClick={handleLogout}>
                <span className="flex gap-2 items-center text-base cursor-pointer">
                  <LogOutIcon className="w-6 h-6" />
                  Logout
                </span>
              </div>

              {/* profile dropdown visible for large devices */}
              {user && (
                <div className="hidden lg:flex">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                      <UserCircle2 size={28} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Link
                            href="/user/dashboard"
                            className="flex items-center gap-2 text-base"
                          >
                            <LayoutDashboard className="w-6 h-6" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <Separator />
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
