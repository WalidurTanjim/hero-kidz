import Logo from '@/components/Logo/Logo'
import React from 'react'

const loading = () => {
     return (
          <div className='w-full h-screen flex items-center justify-center'>
               <div className='flex items-center justify-center flex-col gap-5'>
                    <h1 className='text-4xl text-slate-700 text-center font-medium animate-pulse'>Loading...</h1>
                    <Logo className="animate-ping" />
               </div>
          </div>
     )
}

export default loading
