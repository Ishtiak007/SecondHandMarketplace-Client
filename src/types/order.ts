import { TProduct } from "./product";

type TBuyerId = {
  _id: string;
  name: string;
  identifier: string;
  role: string;
};

type TSellerId = Pick<TBuyerId, keyof TBuyerId>;

export type TOrder = {
  _id: string;
  buyerID: TBuyerId;
  sellerID: TSellerId;
  itemID: TProduct;
  status?: "pending" | "completed";
  paymentMethod?: "online";
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
};
