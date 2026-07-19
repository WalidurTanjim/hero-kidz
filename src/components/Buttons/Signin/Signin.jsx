"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const Signin = () => {
     const isUser = false;

     return (
          <>
               {
                    isUser ? 
                    <Menu as="div" className="relative ml-3">
                                   <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                             alt=""
                                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                                        />
                                   </MenuButton>

                                   <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                   >
                                        <MenuItem>
                                             <Link href="/" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Your profile</Link>
                                        </MenuItem>
                                        <MenuItem>
                                             <Link href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700  data-focus:bg-gray-100 data-focus:outline-hidden">Settings</Link>
                                        </MenuItem>

                                        <MenuItem>
                                             <Link href="/" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Sign out</Link>
                                        </MenuItem>
                                   </MenuItems>
                              </Menu> :
                              <Link href={`/auth/signin`}><button className='btn btn-outline btn-warning btn-sm ms-2'>Sign In</button></Link>
               }
          </>
     )
}

export default Signin
