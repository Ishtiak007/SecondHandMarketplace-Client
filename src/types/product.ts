type TUserId = {
  _id: string;
  name: string;
  identifier: string;
  role: string;
};

export type TProduct = {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: "new" | "likeNew" | "used" | "refurbished";
  images: string[];
  userID?: TUserId;
  status?: "available" | "sold";
  category:
    | "home"
    | "electronics"
    | "books"
    | "furniture"
    | "tools"
    | "office"
    | "mobiles"
    | "vehicles"
    | "property"
    | "pets"
    | "cloths"
    | "sports"
    | "toys"
    | "beauty"
    | "fashion"
    | "music"
    | "gaming"
    | "groceries"
    | "baby"
    | "art"
    | "garden"
    | "jewelry"
    | "health"
    | "watches"
    | "travel";
  brand?: string;
  location: string;
  negotiable?: "yes" | "no";
  warranty?: string;
  contactNumber: string;
  isDeleted?: false;
  createdAt: string;
  updatedAt: string;
};
