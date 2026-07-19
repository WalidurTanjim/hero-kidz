import ProductCardSkeleton from '@/components/skeleton/ProductCardSkeleton/ProductCardSkeleton'
import React from 'react'

const loading = () => {
     return (
          <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mt-10'>
               {
                    [...Array(9)].map((_, idx) => (
                         <ProductCardSkeleton key={idx} />
                    ))
               }
          </div>
     )
}

export default loading
