export interface IUser {
  _id: string;
  name: string;
  identifier: string;
  password: string;
  role?: "user" | "admin";
  status?: "active" | "banned";
  isDeleted?: false;
  profilePicture?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  country?: string;
  gender?: "male" | "female";
  bio?: string;
  facebook?: string;
  website?: string;
  createdAt: string;
  updatedAt: string;
}
