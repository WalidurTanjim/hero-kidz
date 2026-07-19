"use client"
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';

const AddToCartButton = ({ product }) => {
     const pathname = usePathname();
     const router = useRouter();
     
     // is this user loggedin or not
     const isLoggedIn = false;

     // handleAddToCart
     const handleAddToCart = async() => {
          if(isLoggedIn) {
               alert(product._id);
          }else{
               router.push(`/auth/signin?callback=${pathname}`)
          }
     }

     return (
          <button onClick={handleAddToCart} className="flex-1 min-w-[200px] bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
               <ShoppingCartIcon className="w-5 h-5" />
               Add to Cart
          </button>
     )
}

export default AddToCartButton
