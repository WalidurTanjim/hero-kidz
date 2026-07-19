import React from 'react'

const ProductCardSkeleton = () => {
     return (
          <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm animate-pulse">
               {/* Image skeleton */}
               <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-200">
                    {/* Quick action buttons skeleton */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                         <div className="p-2 bg-gray-300 rounded-full shadow-md w-8 h-8" />
                         <div className="p-2 bg-gray-300 rounded-full shadow-md w-8 h-8" />
                    </div>
               </div>

               <div className="p-4">
                    {/* Product name skeleton */}
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />

                    {/* Description skeleton */}
                    <div className="space-y-1">
                         <div className="h-3 bg-gray-200 rounded w-full" />
                         <div className="h-3 bg-gray-200 rounded w-2/3" />
                    </div>

                    {/* Rating skeleton */}
                    <div className="mt-2 flex items-center gap-1">
                         <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                   <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
                              ))}
                         </div>
                         <div className="h-3 bg-gray-200 rounded w-8 ml-1" />
                    </div>

                    {/* Price and Add to Cart skeleton */}
                    <div className="mt-3 flex items-center justify-between">
                         <div className="h-6 bg-gray-200 rounded w-20" />
                         <div className="h-8 bg-gray-200 rounded-lg w-24" />
                    </div>
               </div>
          </div>
     )
}

export default ProductCardSkeleton
