import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
     return (
          <Link href={`/`} className='flex gap-x-1.5 items-center'>
               <Image alt="HeroKidz logo" src={`/assets/logo.png`} width={35} height={25} />
               <h1 className="text-xl text-slate-700 font-medium">Hero <span className='text-warning'>Kidz</span></h1>
          </Link>
     )
}

export default Logo
