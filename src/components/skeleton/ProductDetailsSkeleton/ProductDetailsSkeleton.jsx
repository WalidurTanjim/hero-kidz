const ProductDetailsSkeleton = () => {
     return (
          <div className="min-h-screen bg-gray-50 py-8">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button Skeleton */}
                    <div className="inline-flex items-center gap-2 text-gray-400 mb-6">
                         <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
                         <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
                    </div>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
                              {/* Product Image Skeleton */}
                              <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden animate-pulse">
                                   {/* Discount Badge Skeleton */}
                                   <div className="absolute top-4 left-4 w-20 h-8 bg-gray-300 rounded" />
                              </div>

                              {/* Product Details Skeleton */}
                              <div className="flex flex-col space-y-4">
                                   {/* Title Skeleton */}
                                   <div className="space-y-2">
                                        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
                                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                                   </div>

                                   {/* Rating Skeleton */}
                                   <div className="flex items-center gap-3 mt-2">
                                        <div className="flex items-center gap-1">
                                             {[...Array(5)].map((_, i) => (
                                                  <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
                                             ))}
                                        </div>
                                        <div className="w-8 h-4 bg-gray-200 rounded animate-pulse" />
                                        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
                                   </div>

                                   {/* Price Skeleton */}
                                   <div className="flex items-center gap-3 mt-2">
                                        <div className="h-8 bg-gray-200 rounded w-24 animate-pulse" />
                                        <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
                                        <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
                                   </div>

                                   {/* Stock Status Skeleton */}
                                   <div className="flex items-center gap-2 mt-2">
                                        <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse" />
                                        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
                                        <div className="w-12 h-4 bg-gray-200 rounded animate-pulse ml-2" />
                                   </div>

                                   {/* Action Buttons Skeleton */}
                                   <div className="flex flex-wrap gap-3 mt-4">
                                        <div className="flex-1 min-w-[200px] h-12 bg-gray-200 rounded-lg animate-pulse" />
                                        <div className="w-24 h-12 bg-gray-200 rounded-lg animate-pulse" />
                                        <div className="w-24 h-12 bg-gray-200 rounded-lg animate-pulse" />
                                   </div>

                                   {/* Key Features Skeleton */}
                                   <div className="mt-6 border-t border-gray-200 pt-6">
                                        <div className="h-4 bg-gray-200 rounded w-32 mb-3 animate-pulse" />
                                        <ul className="space-y-2">
                                             {[...Array(4)].map((_, index) => (
                                                  <li key={index} className="flex items-start gap-2">
                                                       <div className="w-4 h-4 bg-gray-200 rounded mt-0.5 animate-pulse" />
                                                       <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              </div>
                         </div>

                         {/* Description & Q&A Section Skeleton */}
                         <div className="border-t border-gray-200 p-6 lg:p-8">
                              {/* Description Skeleton */}
                              <div className="mb-8">
                                   <div className="h-6 bg-gray-200 rounded w-32 mb-3 animate-pulse" />
                                   <div className="space-y-2">
                                        {[...Array(5)].map((_, index) => (
                                             <div key={index} className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                                        ))}
                                   </div>
                              </div>

                              {/* Q&A Section Skeleton */}
                              <div>
                                   <div className="h-6 bg-gray-200 rounded w-48 mb-3 animate-pulse" />
                                   <div className="space-y-4">
                                        {[...Array(2)].map((_, index) => (
                                             <div key={index} className="border border-gray-200 rounded-lg p-4">
                                                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                                                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductDetailsSkeleton;
