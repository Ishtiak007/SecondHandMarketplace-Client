"use client";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
