import { getProductById } from '@/actions/server/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {
     ShoppingCartIcon,
     HeartIcon,
     ShareIcon,
     StarIcon,
     CheckCircleIcon,
     ChevronLeftIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import AddToCartButton from '@/components/Buttons/AddToCartButton/AddToCartButton';

export async function generateMetadata({ params }) {
     const { id } = await params;

     const product = await getProductById(id);

     if (!product) {
          return {
               title: "Product Not Found",
               description: "This product does not exist.",
          };
     }

     const discountedPrice =
          product.price - (product.price * (product.discount || 0)) / 100;

     return {
          title: `${product.title} | Your Store`,
          description:
               product.description?.slice(0, 150) ||
               `Buy ${product.title} at best price.`,

          openGraph: {
               title: product.title,
               description:
                    product.description?.slice(0, 150) ||
                    `Buy ${product.title} at best price.`,
               images: [
                    {
                         url: product.image,
                         width: 800,
                         height: 600,
                         alt: product.title,
                    },
               ],
          },

          twitter: {
               card: "summary_large_image",
               title: product.title,
               description:
                    product.description?.slice(0, 150) ||
                    `Buy ${product.title} at best price.`,
               images: [product.image],
          },

          alternates: {
               canonical: `/products/${id}`,
          },

          other: {
               price: `৳${discountedPrice.toFixed(2)}`,
               rating: product.ratings,
          },
     };
}

const ProductDetails = async ({ params }) => {
     const { id } = await params;
     const product = await getProductById(id);
     // console.log(product)

     const renderStars = (rating) => {
          const fullStars = Math.floor(rating);
          const hasHalfStar = rating % 1 !== 0;
          const stars = [];

          for (let i = 0; i < fullStars; i++) {
               stars.push(<StarSolidIcon key={`star-${i}`} className="w-5 h-5 text-yellow-400" />);
          }

          if (hasHalfStar) {
               stars.push(
                    <div key="half-star" className="relative">
                         <StarSolidIcon className="w-5 h-5 text-gray-300" />
                         <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                              <StarSolidIcon className="w-5 h-5 text-yellow-400" />
                         </div>
                    </div>
               );
          }

          const emptyStars = 5 - stars.length;
          for (let i = 0; i < emptyStars; i++) {
               stars.push(<StarSolidIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
          }

          return stars;
     };

     const discountedPrice = product.price - (product.price * (product.discount || 0) / 100);

     return (
          <div className="min-h-screen bg-gray-50 py-8">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                         href="/products"
                         className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
                    >
                         <ChevronLeftIcon className="w-5 h-5" />
                         <span>Back to Products</span>
                    </Link>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
                              {/* Product Image */}
                              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                   <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover object-center"
                                        priority
                                   />
                                   {product.discount > 0 && (
                                        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded">
                                             {product.discount}% OFF
                                        </div>
                                   )}
                              </div>

                              {/* Product Details */}
                              <div className="flex flex-col">
                                   {/* Title */}
                                   <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        {product.title}
                                   </h1>

                                   {/* Bangla Title */}
                                   {product.bangla && (
                                        <p className="text-sm text-gray-500 mt-1">
                                             {product.bangla}
                                        </p>
                                   )}

                                   {/* Rating */}
                                   <div className="flex items-center gap-3 mt-3">
                                        <div className="flex items-center">
                                             {renderStars(product.ratings)}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">
                                             {product.ratings}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                             ({product.reviews} reviews)
                                        </span>
                                   </div>

                                   {/* Price */}
                                   <div className="mt-4 flex items-center gap-3">
                                        <span className="text-3xl font-bold text-gray-900">
                                             ৳{discountedPrice.toFixed(2)}
                                        </span>
                                        {product.discount > 0 && (
                                             <>
                                                  <span className="text-lg text-gray-400 line-through">
                                                       ৳{product.price.toFixed(2)}
                                                  </span>
                                                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                                                       Save ৳{(product.price - discountedPrice).toFixed(2)}
                                                  </span>
                                             </>
                                        )}
                                   </div>

                                   {/* Stock Status */}
                                   <div className="mt-4 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                        <span className="text-sm text-green-700 font-medium">In Stock</span>
                                        <span className="text-sm text-gray-500 ml-2">
                                             {product.sold} sold
                                        </span>
                                   </div>

                                   {/* Action Buttons */}
                                   <div className="mt-6 flex flex-wrap gap-3">
                                        <AddToCartButton product={product} />
                                        <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                             <HeartIcon className="w-5 h-5" />
                                             Wishlist
                                        </button>
                                        <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                             <ShareIcon className="w-5 h-5" />
                                             Share
                                        </button>
                                   </div>

                                   {/* Key Features/Info */}
                                   {product.info && product.info.length > 0 && (
                                        <div className="mt-6 border-t border-gray-200 pt-6">
                                             <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                                  Key Features
                                             </h3>
                                             <ul className="space-y-2">
                                                  {product.info.map((item, index) => (
                                                       <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                                            <span>{item}</span>
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>
                                   )}
                              </div>
                         </div>

                         {/* Description & Q&A Section */}
                         <div className="border-t border-gray-200 p-6 lg:p-8">
                              {/* Description */}
                              <div className="mb-8">
                                   <h2 className="text-lg font-semibold text-gray-900 mb-3">
                                        Description
                                   </h2>
                                   <div className="prose prose-sm max-w-none text-gray-600">
                                        {product.description.split('\n').map((paragraph, index) => (
                                             <p key={index} className="mb-2">
                                                  {paragraph.trim()}
                                             </p>
                                        ))}
                                        {/* <p>{product.description}</p> */}
                                   </div>
                              </div>

                              {/* Q&A Section */}
                              {product.qna && product.qna.length > 0 && (
                                   <div>
                                        <h2 className="text-lg font-semibold text-gray-900 mb-3">
                                             Questions & Answers
                                        </h2>
                                        <div className="space-y-4">
                                             {product.qna.map((item, index) => (
                                                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                                                       <p className="text-sm font-medium text-gray-900">
                                                            Q: {item.question}
                                                       </p>
                                                       <p className="text-sm text-gray-600 mt-1">
                                                            A: {item.answer}
                                                       </p>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProductDetails
