/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      next: {
        tags: ["PRODUCT"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/category/${category}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        // cache: "no-store",
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductsByUser = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/byUser`,
      {
        next: {
          tags: ["PRODUCT"],
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

export const addProduct = async (productData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(productData),
    });
    revalidateTag("PRODUCT");

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateProductById = async (
  id: string,
  updatedProductData: any
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(updatedProductData),
      }
    );
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateProductStatusById = async (id: string, status: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(status),
      }
    );
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteProductById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// ...........................Specially for admin.....................

// Listings delete by admin
export const deleteListingByAdmin = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/admin/${id}`, // API endpoint
      {
        method: "DELETE", // HTTP method for deletion
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value, // Ensure you use the correct method for storing/retrieving token
        },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to delete the listing");
    }
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(
      error.message || "Something went wrong while deleting the listing."
    );
  }
};

// Function to update the listing status by admin
export const updateListingStatusByAdmin = async (
  id: string,
  status: string
) => {
  try {
    console.log("Updating listing with ID:", id);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/admin/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify({
          status,
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.log("Error response from backend:", errorData);
      throw new Error(
        errorData.message || "Failed to update the listing status"
      );
    }
    revalidateTag("PRODUCT");

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error in updateListingStatusByAdmin:", error);
    throw new Error(
      error.message || "Something went wrong while updating the listing status"
    );
  }
};

// Update product by admin
export const updateListingByAdmin = async (id: string, updateData: object) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/admin/${id}/update`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value, // Retrieve the token from localStorage (or cookies if needed)
        },
        body: JSON.stringify(updateData), // Send the updateData as the request body
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update the listing");
    }
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data; // Return the response data from the API (e.g., updated listing)
  } catch (error: any) {
    throw new Error(
      error.message || "Something went wrong while updating the listing"
    );
  }
};
