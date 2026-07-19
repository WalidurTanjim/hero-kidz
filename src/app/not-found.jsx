import Link from 'next/link'
import React from 'react'

const NotFound404 = () => {
     return (
          <div className='notFound w-full px-2 md:px-5 lg:px-8 py-10'>
               <h1 className='text-4xl text-red-700 text-center font-medium'>404 | Not Found</h1>
               
               <div className='w-full mt-5 flex justify-center'>
                    <Link href={`/`}><button className='px-5 py-1.5 border border-gray-300 rounded-md hover:bg-gray-200 active:bg-gray-100'>Go to home</button></Link>
               </div>
          </div>
     )
}

export default NotFound404
