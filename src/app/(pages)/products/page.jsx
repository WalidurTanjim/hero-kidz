import React from 'react'
import products from "@/data/toys.json"
import ProductCard from '@/components/Cards/ProductCard/ProductCard'

const Products = () => {
     return (
          <div className='products w-full px-2 md:px-5 lg:px-8 py-10'>
               <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5'>
                    {
                         products.map((product, idx) => <ProductCard key={idx} product={product} />)
                    }
               </div>
          </div>
     )
}

export default Products
