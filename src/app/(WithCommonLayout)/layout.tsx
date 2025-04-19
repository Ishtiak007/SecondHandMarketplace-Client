import { ReactNode } from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
