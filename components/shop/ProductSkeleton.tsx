"use client";

interface ProductSkeletonProps {
  viewMode?: "grid" | "list";
}

export function ProductSkeleton({ viewMode = "grid" }: ProductSkeletonProps) {
  if (viewMode === "list") {
    return (
      <div className="flex bg-white rounded-xl overflow-hidden border border-gray-100 animate-pulse">
        {/* Image skeleton */}
        <div className="w-48 h-48 shrink-0 bg-gray-200" />

        {/* Content skeleton */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-5 w-16 bg-gray-200 rounded-full" />
              <div className="h-5 w-20 bg-gray-200 rounded-full" />
            </div>
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
            <div className="h-7 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-20 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 animate-pulse">
      {/* Image skeleton */}
      <div className="relative h-64 w-full bg-gray-200">
        <div className="absolute top-4 left-4 h-6 w-16 bg-gray-300 rounded-full" />
        <div className="absolute top-4 right-14 h-6 w-20 bg-gray-300 rounded-full" />
        <div className="absolute top-3 right-3 h-8 w-8 bg-gray-300 rounded-full" />
      </div>

      {/* Content skeleton */}
      <div className="p-5">
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="h-7 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

interface ProductSkeletonGridProps {
  count?: number;
  viewMode?: "grid" | "list";
}

export function ProductSkeletonGrid({
  count = 6,
  viewMode = "grid",
}: ProductSkeletonGridProps) {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} viewMode={viewMode} />
      ))}
    </div>
  );
}
