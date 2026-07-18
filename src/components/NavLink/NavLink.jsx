"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ href, children }) => {
     const pathname = usePathname();
     console.log("Pathname:", pathname);

     return (
          <Link href={href} className={`${pathname.startsWith(href) && 'text-warning'} px-3 flex items-center text-sm`}>{ children }</Link>
     )
}

export default NavLink
