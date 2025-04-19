"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Separator } from "../../../ui/separator";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { Input } from "../../../ui/input";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Image from "next/image";
import loginImage from "../../../../assets/loginImage.jpg";
import { loginValidation } from "./Login.Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { verifyToken } from "../../../../lib/verifyToken";
import { loginUser } from "../../../../services/AuthApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../../../redux/hooks";
import { setUser } from "../../../../redux/features/authSlice";

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
    setValue,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const response = await loginUser(data);

      if (response?.success) {
        toast.success(response?.message);
        const user = verifyToken(response.data?.token);

        dispatch(setUser({ user: user, token: response.data?.token }));
        router.push("/");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wring!");
    }
  };

  const handleUserAutoFillButton = () => {
    setValue("identifier", "ishtiak.sparrow98@gmail.com");
    setValue("password", "123456Aa!");
  };

  const handleAdminAutoFillButton = () => {
    setValue("identifier", "ishtiakahmed01999@gmail.com");
    setValue("password", "123456Aa!");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-lg rounded-xl overflow-hidden shadow-xl">
        <div className="relative">
          <Image
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-35"></div>
        </div>

        <div>
          <Card className="w-full md:p-6">
            <CardHeader>
              <CardTitle className=" text-xl lg:text-2xl font-bold text-center">
                Login your account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FormProvider {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="identifier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email or Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your email or phone number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Enter your password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-md transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 w-full"
                  >
                    {isSubmitting ? "Logging..." : "Login"}
                  </button>
                </form>
                <p className="text-center text-sm text-gray-600 my-5">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-blue-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
                <Separator />
                <p className="text-center text-gray-500 text-[15px] my-5">
                  Click here to auto-fill your email and password
                </p>
                <div className="flex flex-col gap-4 md:flex-row">
                  <button
                    onClick={handleUserAutoFillButton}
                    type="submit"
                    className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 w-full flex-1  bg-zinc-50"
                  >
                    User
                  </button>
                  <button
                    onClick={handleAdminAutoFillButton}
                    type="submit"
                    className="hover:cursor-pointer border border-neutral-300 px-4 flex py-[6px] gap-3 items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out hover:bg-teal-700 hover:text-white  my-4 mt-2 w-full flex-1 bg-zinc-50"
                  >
                    Admin
                  </button>
                </div>
              </FormProvider>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
