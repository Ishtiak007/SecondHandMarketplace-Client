/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addOrder = async (orderData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(orderData),
      }
    );

    revalidateTag("ORDER");

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPurchaseHistory = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases-history`,
      {
        next: {
          tags: ["ORDER"],
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSalesHistory = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/sales-history`,

      {
        next: {
          tags: ["ORDER"],
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateOrderStatusById = async (id: string, status: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(status),
      }
    );
    revalidateTag("ORDER");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
