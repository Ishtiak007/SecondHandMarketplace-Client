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
  Menu as HamburgerMenu, // Import the hamburger icon
} from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu visibility

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
      className={`transition-all duration-300 ease-in-out ${
        isScrolled
          ? "lg:fixed lg:top-0 lg:left-0 lg:w-full bg-opacity-75 lg:z-50 lg:shadow-md bg-white"
          : "lg:relative shadow-sm p-1"
      }`}
    >
      <Container>
        <nav className="mt-4">
          <div className="mt-4 lg:flex space-y-4 justify-between items-center lg:mb-4">
            <Link href={"/"}>
              <h1 className="lg:text-lg font-semibold">
                SecondHand<span className="text-teal-600">Marketplace</span>
              </h1>
            </Link>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-teal-700"
              >
                <HamburgerMenu size={28} />
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-4 text-base font-medium">
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
                <NavigationLink route="Contact" path="/contactUs" />
              </li>
              <li>
                <NavigationLink route="FAQ" path="/faq" />
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="lg:flex items-center gap-4">
              <Link href="/user/dashboard">
                <Button
                  variant="outline"
                  className="hover:cursor-pointer border border-neutral-300 lg:px-4 flex lg:py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white bg-zinc-50"
                >
                  Dashboard
                </Button>
              </Link>

              {user && (
                <div onClick={handleLogout}>
                  <span className="hover:cursor-pointer border border-neutral-300 lg:px-4 flex lg:py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white bg-zinc-50">
                    <LogOutIcon className="w-6 h-6" />
                    Logout
                  </span>
                </div>
              )}

              {!user && (
                <div className="hidden lg:flex">
                  <Link href={"/login"}>
                    <span className="hover:cursor-pointer border border-neutral-300 lg:px-4 flex lg:py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white bg-zinc-50">
                      <LogIn className="w-6 h-6" />
                      Login
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white shadow-md py-4 px-6">
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="flex gap-2 text-base items-center">
                    <Home className="w-6 h-6" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="flex gap-2 text-base items-center"
                  >
                    <ShoppingBag className="w-6 h-6" /> Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutUs"
                    className="flex gap-2 text-base items-center"
                  >
                    <Building2 className="w-6 h-6" /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactUs"
                    className="flex gap-2 text-base items-center"
                  >
                    <Mail className="w-6 h-6" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="flex gap-2 text-base items-center"
                  >
                    <HelpCircle className="w-6 h-6" /> FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="flex gap-2 text-base items-center"
                  >
                    <Book className="w-6 h-6" /> Blogs
                  </Link>
                </li>
                {user && (
                  <Fragment>
                    <li>
                      <Link
                        href="/user/dashboard"
                        className="flex gap-2 text-base items-center"
                      >
                        <LayoutDashboard className="w-6 h-6" /> Dashboard
                      </Link>
                    </li>
                    <Separator />
                  </Fragment>
                )}
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
}
