"use client";
import Image from "next/image";
import { Globe, Mail, User } from "lucide-react";
import { FaFacebook } from "react-icons/fa6";
import { useState } from "react";
import { IUser } from "../../../../types/user";
import { Separator } from "../../../ui/separator";
import ProfileModal from "./ProfileModal";

export default function UserProfile({ profileData }: { profileData: IUser }) {
  const [profile, setProfile] = useState(profileData);

  const handleSave = async (updatedProfile: any) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="overflow-hidden w-[90%] mx-auto my-7 border rounded-xl">
      {/* Profile Banner Section - Full Width */}
      <div className="relative w-full h-[350px]">
        <Image
          src={
            profile?.profilePicture ||
            "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Profile Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Profile Content Section */}
      <div className="px-6 py-8">
        {/* Profile Info */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            {profile?.name || "User"}
          </h2>
          <p className="text-sm text-gray-600 mt-2 flex justify-center gap-1 items-center">
            <Mail size={16} />
            {profile?.identifier}
          </p>
          <p className="text-gray-500 mt-2 flex justify-center items-center">
            <User size={16} className="inline-block mr-1" />
            <span className="capitalize">{profile?.role}</span>
            <span className="mx-1">•</span>
            <span className="text-green-600 capitalize">{profile?.status}</span>
          </p>

          {/* Social Links Section */}
          <div className="my-5">
            <div className="flex justify-center gap-8 text-blue-600">
              <a
                href={profile?.facebook || "https://facebook.com"}
                target="_blank"
                className="flex  items-center gap-2"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={profile?.website || "https://example.com"}
                target="_blank"
                className="flex items-center gap-2 text-gray-600"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <ProfileModal profile={profile} onSave={handleSave} />
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <Separator className="mt-8" />
        <div className="py-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
            Profile Summary
          </h3>
          <p className="text-gray-700 text-sm text-center">
            {profile?.bio || "Add a short bio about yourself."}
          </p>
        </div>

        {/* Personal Details Section */}
        <Separator className="mt-8" />
        <div className="py-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-5">
            Your Personal Information
          </h3>
          <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-gray-700">
            <p>
              <strong>City:</strong> {profile?.city || "Not set"}
            </p>
            <p>
              <strong>Address:</strong> {profile?.address || "Not set"}
            </p>
            <p>
              <strong>Gender:</strong> {profile?.gender || "Not specified"}
            </p>
            <p>
              <strong>Postal Code:</strong> {profile?.postalCode || "Not set"}
            </p>
            <p>
              <strong>Country:</strong> {profile?.country || "Not set"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
