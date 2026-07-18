import { senFont } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
     return (
          <div className='banner w-full grid grid-cols-1 md:grid-cols-2 items-center'>
               <div className='flex-1 space-y-5'>
                    <h1 className={`${senFont.className} defaultH1 leading-16`}>Buy our products to make your <span className='text-error'>childs happy</span></h1>
                    <p className={`${senFont.className} defaultP`}>Buy each product with up to <span className='text-warning'>15% discount</span></p>
                    <button className='btn btn-warning btn-outline'>Explore products</button>
               </div>

               <div className="flex-1 flex justify-center items-center">
                    <Image alt='Banner image' src={`/assets/hero.png`} width={500} height={400} />
               </div>
          </div>
     )
}

export default Banner
