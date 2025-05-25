import Link from "next/link";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="p-6 w-[350px] md:w-[500px] shadow-lg">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-red-600">Page Not Found!</h2>
          <p className="text-sm text-gray-700">
            Sorry, the page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link href="/" className="block">
            <Button className="mt-2 bg-[#F59E0B] text-white hover:bg-[#D97706] cursor-pointer ">
              Go Back Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
