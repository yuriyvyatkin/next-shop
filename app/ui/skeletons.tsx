// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-50 p-4 shadow-sm animate-pulse">
      {/* Product Image */}
      <div className="w-full">
        <div className="h-72 w-full bg-gray-100 rounded-t-xl"></div>
      </div>
      {/* Product Name and Description */}
      <div className="mt-4">
        <div className="h-6 w-32 bg-gray-100 rounded"></div> {/* Name Skeleton */}
        <div className="mt-2 h-4 w-48 bg-gray-100 rounded"></div> {/* Description Skeleton */}
      </div>
      {/* Price and Rating */}
      <div className="mt-4">
        <div className="h-6 w-24 bg-gray-100 rounded"></div> {/* Price Skeleton */}
        <div className="mt-2 h-4 w-20 bg-gray-100 rounded"></div> {/* Rating Skeleton */}
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
