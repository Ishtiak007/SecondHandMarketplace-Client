import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Poppins } from "next/font/google";
import Providers from "../providers/Providers";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppinsClassName: string = poppins.className;

export const metadata: Metadata = {
  title: "Second-Hand Shopping Made Easy – Bangladesh’s Online Marketplace.",
  description:
    "Welcome to Bangladesh’s most trusted SecondHand Marketplace — a one-stop platform where you can buy and sell pre-owned products with ease. Whether you're searching for budget-friendly gadgets, furniture, fashion items, or everyday essentials, we've got you covered. List your items for free, connect with genuine buyers or sellers near you, and enjoy a secure, user-friendly experience. Join our growing community and give your unused items a second life while saving money.",
  keywords: [
    "SecondHand marketplace",
    "buy used products",
    "sell used items",
    "used products in Bangladesh",
    "online marketplace BD",
    "pre-owned items Bangladesh",
    "Bangladesh buy and sell platform",
    "second hand electronics BD",
    "used furniture for sale Bangladesh",
    "cheap used items Bangladesh",
  ],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  publisher: "Ishtiak's LTD",
  authors: [
    {
      name: "Ishtiak Ahmed",
      url: "https://www.facebook.com/ishtiakahmed01999",
    },
  ],
  creator: "Ishtiak Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsClassName}`}>
        <Providers>
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
