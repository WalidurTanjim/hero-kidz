import { ShoppingCartIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
     const {
          title,
          price,
          image,
          rating,
          reviews,
          description,
          inStock
     } = product;

     const renderStars = () => {
          const fullStars = Math.floor(rating);
          const hasHalfStar = rating % 1 !== 0;
          const stars = [];

          for (let i = 0; i < fullStars; i++) {
               stars.push(<StarIcon key={`star-${i}`} className="w-4 h-4 text-yellow-400" />);
          }

          if (hasHalfStar) {
               stars.push(
                    <div key="half-star" className="relative">
                         <StarIcon className="w-4 h-4 text-gray-300" />
                         <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                              <StarIcon className="w-4 h-4 text-yellow-400" />
                         </div>
                    </div>
               );
          }

          const emptyStars = 5 - stars.length;
          for (let i = 0; i < emptyStars; i++) {
               stars.push(<StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
          }

          return stars;
     };


     return (
          <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
               <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                         src={image}
                         alt={title}
                         className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                         width={200} height={200}
                    />

                    {/* Quick action buttons - visible on hover */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                         <button
                              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                              aria-label="Add to wishlist"
                         >
                              <HeartIcon className="w-4 h-4 text-gray-600" />
                         </button>
                         <Link href={`/products/${title}`}><button
                              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                              aria-label="Quick view"
                         >
                              <EyeIcon className="w-4 h-4 text-gray-600" />
                         </button></Link>
                    </div>

                    {/* Stock status badge */}
                    {!inStock && (
                         <div className="absolute top-2 left-2 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
                              Out of Stock
                         </div>
                    )}
               </div>

               <div className="p-4">
                    {/* Product name */}
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                         {title}
                    </h3>

                    {/* Description */}
                    {description && (
                         <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                              {description}
                         </p>
                    )}

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-1">
                         <div className="flex items-center">
                              {renderStars()}
                         </div>
                         {reviews && (
                              <span className="text-xs text-gray-500 ml-1">
                                   ({reviews})
                              </span>
                         )}
                    </div>

                    {/* Price and Add to Cart */}
                    <div className="mt-3 flex items-center justify-between">
                         <div className="flex items-baseline gap-1">
                              <span className="text-lg font-semibold text-gray-900">
                                   ${price.toFixed(2)}
                              </span>
                         </div>

                         <button className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors bg-warning hover:bg-amber-500 active:bg-warning text-slate-700`}>
                              <ShoppingCartIcon className="w-4 h-4" />
                              {/* Add to Cart */}
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default ProductCard
