import { Skeleton } from "../../skeleton";

export default function ProductSkeleton() {
  return (
    <div className="w-full">
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-6 w-3/4 mt-2" />
      <Skeleton className="h-4 w-1/2 mt-1" />
    </div>
  );
}
