import React from 'react'
import products from "@/data/toys.json";
import ProductCard from '@/components/Cards/ProductCard/ProductCard';

const Products = () => {
     return (
          <div className='products w-full my-10'>
               <h1 className='text-center text-3xl text-slate-700 font-medium'>Our Products</h1>

               <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mt-10'>
                    {
                         products.map((product, idx) => <ProductCard key={idx} product={product} />)
                    }
               </div>
          </div>
     )
}

export default Products
