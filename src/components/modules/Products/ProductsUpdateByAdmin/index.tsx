"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
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
import { Plus } from "lucide-react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { districts } from "../AddProducts/districts";
import { TProduct } from "../../../../types/product";
import {
  updateListingByAdmin,
  updateProductById,
} from "../../../../services/ProductApi";

const conditionOptions = [
  { value: "new", label: "New" },
  { value: "likeNew", label: "Like New" },
  { value: "used", label: "Used" },
  { value: "refurbished", label: "Refurbished" },
];

const categoryOptions = [
  { value: "home", label: "Home" },
  { value: "electronics", label: "Electronics" },
  { value: "books", label: "Books" },
  { value: "furniture", label: "Furniture" },
  { value: "tools", label: "Tools" },
  { value: "office", label: "Office" },
  { value: "mobiles", label: "Mobiles" },
  { value: "vehicles", label: "Vehicles" },
  { value: "property", label: "Property" },
  { value: "pets", label: "Pets" },
  { value: "cloths", label: "Cloths" },
  { value: "sports", label: "Sports" },
  { value: "toys", label: "Toys" },
  { value: "beauty", label: "Beauty" },
  { value: "fashion", label: "Fashion" },
  { value: "music", label: "Music" },
  { value: "gaming", label: "Gaming" },
  { value: "groceries", label: "Groceries" },
  { value: "baby", label: "Baby" },
  { value: "art", label: "Art" },
  { value: "garden", label: "Garden" },
  { value: "jewelry", label: "Jewelry" },
  { value: "health", label: "Health" },
  { value: "watches", label: "Watches" },
  { value: "travel", label: "Travel" },
];

const negotiableOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const locationOptions = districts.map((value) => ({
  value: value,
  label: value,
}));

export default function UpdateProductByAdminForm({
  product,
}: {
  product: TProduct;
}) {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      title: product?.title || "",
      description: product?.description || "",
      price: product?.price || "",
      condition: product?.condition || "",
      category: product?.category || "",
      brand: product?.brand || "",
      location: product?.location || "",
      negotiable: product?.negotiable || "",
      warranty: product?.warranty || "",
      contactNumber: product?.contactNumber || "",
      images: product?.images?.map((image) => ({
        value: image,
      })) || [{ value: "" }],
    },
  });

  const { append: appendImage, fields: imageFields } = useFieldArray({
    control: form.control,
    name: "images",
  });

  const addImage = () => {
    appendImage({ value: "" });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const images =
      data.images?.map((image: { value: string }) => image.value) || []; // Handle images safely

    const modifiedData = {
      ...data,
      images,
      price: isNaN(parseFloat(data.price)) ? 0 : parseFloat(data.price), // Handle invalid price input
    };

    try {
      const response = await updateListingByAdmin(product._id, modifiedData);
      if (response?.success) {
        toast.success("Product updated successfully By Admin");
        router.push("/admin/dashboard/manageAllProducts");
      } else {
        toast.error(response?.message || "Failed to update product"); // Handle errors gracefully
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <div className="p-4 lg:w-[90%] mx-auto border rounded-md shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-teal-800 text-center my-7">
        You Are Updating -{" "}
        <span className="text-blue-800">({product.title})</span>
      </h2>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          {/*** title , category price ***/}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/*** title ***/}
            <div className="flex-1">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Title <span className="text-red-500">***</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter your product title"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/*** category ***/}
            <div className="flex-1">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Category <span className="text-red-500">***</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categoryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/*** price ***/}
            <div className="flex-1">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Price <span className="text-red-500">***</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter the price"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/** condition, brand, location,**/}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/*** condition ***/}
            <div>
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Condition <span className="text-red-500">***</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {conditionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/*** brand ***/}
            <div>
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter the brand"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* location */}
            <div>
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Location <span className="text-red-500">***</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* negotiable, contact number */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/*** negotiable ***/}
            <div>
              <FormField
                control={form.control}
                name="negotiable"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Negotiable</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {negotiableOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/*** contact number ***/}
            <div>
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Contact Number <span className="text-red-500">***</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter your contact number"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/** description, warranty **/}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/*** description ***/}
            <div className="flex-1">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description <span className="text-red-500">***</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter description"
                        className="w-full min-h-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* warranty */}
            <div className="flex-1">
              {/*** warranty ***/}
              <FormField
                control={form.control}
                name="warranty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Warranty</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter warranty details"
                        className="w-full min-h-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* images */}
          <div>
            <Label>
              Images URL<span className="text-red-500">***</span>
            </Label>
            <div className="grid grid-cols-2 border rounded-md p-3 my-2">
              <div className="flex justify-center items-center">
                <button
                  className="hover:cursor-pointer border border-neutral-300 px-2 flex py-[3px] gap-3 items-center justify-center font-medium rounded-md transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 bg-zinc-100"
                  onClick={addImage}
                  type="button"
                >
                  <Plus className="" /> Add Image Field
                </button>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {/*** Dynamic image fields ***/}
                  {imageFields.map((imageField, index) => (
                    <div key={imageField.id}>
                      <FormField
                        control={form.control}
                        name={`images.${index}.value`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image {index + 1}</FormLabel>
                            <FormControl>
                              <Input {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out bg-teal-600 text-amber-50 hover:bg-teal-800 hover:text-white  my-4 mt-2 w-full flex-1 "
            >
              Update This Product
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
