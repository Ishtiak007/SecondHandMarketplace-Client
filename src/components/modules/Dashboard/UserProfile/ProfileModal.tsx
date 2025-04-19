"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { Textarea } from "../../../ui/textarea";
import { toast } from "sonner";
import { EditIcon } from "lucide-react";
import { IUser } from "../../../../types/user";
import { updateProfile } from "../../../../services/User";

export default function ProfileModal({
  profile,
  onSave,
}: {
  profile: IUser;
  onSave: (updateProfile: any) => void;
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || "",
    identifier: profile?.identifier || "",
    profilePicture: profile?.profilePicture || "",
    city: profile?.city || "",
    address: profile?.address || "",
    postalCode: profile?.postalCode || "",
    country: profile?.country || "",
    gender: profile?.gender || "",
    bio: profile?.bio || "",
    facebook: profile?.facebook || "",
    website: profile?.website || "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (value: "male" | "female") => {
    setFormData({ ...formData, gender: value || "male" });
  };

  const handleSubmit = async () => {
    // url validation function
    const isValidURL = (url: string) => {
      if (!url) return true;
      const regex = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i;
      return regex.test(url);
    };

    // Validate all URLs: profilePicture, facebook, website
    if (
      !isValidURL(formData.profilePicture) ||
      !isValidURL(formData.facebook) ||
      !isValidURL(formData.website)
    ) {
      toast.error(
        "Please enter valid URLs for Profile Picture, Facebook, and Website!"
      );
      return;
    }

    try {
      const data = await updateProfile(formData);

      if (data?.success) {
        toast.success("Your Profile updated successfully");
      } else {
        toast.error(data?.error[0]?.message);
      }
    } catch {
      toast.error("Something went wring!");
    }

    onSave(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="hover:cursor-pointer border border-neutral-300 px-4 py-2 flex gap-3 items-center justify-center font-medium rounded-full 
        transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2"
        >
          Update Profile <EditIcon size={18} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="my-6 text-lg md:text-xl text-center">
            Update Your Profile
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Responsive 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Profile Picture URL</Label>
              <Input
                name="profilePicture"
                value={formData.profilePicture}
                onChange={handleChange}
                placeholder="Enter URL"
              />
            </div>

            <div className="space-y-2">
              <Label>Current City</Label>
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Post Code</Label>
              <Input
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Country</Label>
              <Input
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <Select
                onValueChange={handleGenderChange}
                value={formData.gender}
                defaultValue="male"
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Facebook Link</Label>
              <Input
                name="facebook"
                type="url"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="Enter URL"
              />
            </div>

            <div className="space-y-2">
              <Label>Website (Portfolio)</Label>
              <Input
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter URL"
              />
            </div>

            {/* Bio Section - Full Width */}
            <div className="space-y-2 md:col-span-3">
              <Label>Profile Summary</Label>
              <Textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="hover:cursor-pointer border border-neutral-300 bg-gray-200 px-4 py-2 flex gap-3 items-center justify-center font-medium rounded-full 
        transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white hover:border-none my-4 w-full"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
