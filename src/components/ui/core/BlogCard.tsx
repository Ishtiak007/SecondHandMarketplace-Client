import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TBlog } from "@/types";
import moment from "moment-timezone";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }: { blog: TBlog }) {
  return (
    <Card className="w-full overflow-hidden  rounded-lg p-0">
      <div className="w-full h-60 relative">
        <Image
          src={blog?.thumbnail}
          alt={`${blog?.title} - thumbnail image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg "
        />
      </div>
      <CardContent className="pb-4 space-y-2 mt-0">
        <h2 className="text-lg  font-semibold text-center capitalize">
          {blog?.title}
        </h2>
        <div className="py-4">
          <Separator />
        </div>
        <p className="text-center text-gray-600 text-sm">
          {moment(blog?.createdAt).format("DD MMMM YYYY")}\{blog?.authorName}
        </p>
        <p className="text-gray-800 text-md">{blog?.introduction}</p>
        <div className="text-center">
          <Link href={`/blogs/${blog._id}`} className="block">
            <Button className="bg-[#F59E0B] text-white hover:bg-[#D97706] cursor-pointer">
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
