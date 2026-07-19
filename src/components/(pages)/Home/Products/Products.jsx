import React from 'react'
import ProductCard from '@/components/Cards/ProductCard/ProductCard';
import { getProducts } from '@/actions/server/product';

const Products = async() => {
     const products = await getProducts();
     // console.log(products)

     return (
          <div className='products w-full my-10'>
               <h1 className='text-center text-3xl text-slate-700 font-medium'>Our Products</h1>

               <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mt-10'>
                    {
                         products.map((product, idx) => <ProductCard key={product._id} product={product} />)
                    }
               </div>
          </div>
     )
}

export default Products
