import Signin from '@/components/Buttons/Signin/Signin'
import Logo from '@/components/Logo/Logo'
import NavLink from '@/components/NavLink/NavLink'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
     { name: 'Home', href: '/', current: false },
     { name: 'Products', href: '/products', current: false },
     { name: 'Blog', href: '/blog', current: false },
     { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
     return (
          <Disclosure as="nav" className="relative">
               <div className="mx-auto w-full px-2 md:px-5 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                         <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                              {/* Mobile menu button*/}
                              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-slate-700 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                                   <span className="absolute -inset-0.5" />
                                   <span className="sr-only">Open main menu</span>
                                   <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                   <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                              </DisclosureButton>
                         </div>

                         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                              <div className="flex shrink-0 items-center">
                                   {/* <img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto" /> */}
                                   <Logo />
                              </div>

                              <div className="hidden sm:ml-6 sm:block">
                                   <div className="flex space-x-4 mt-1.5">
                                        {navigation.map((item) => (
                                             // <Link key={item.name} href={item.href} aria-current={item.current ? 'page' : undefined}
                                             //      className={classNames(
                                             //           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                             //           'rounded-md px-3 py-2 text-sm font-medium',
                                             //      )}
                                             // >
                                             //      {item.name}
                                             // </Link>
                                             <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                              <button type="button" className="relative rounded-full text-gray-400 hover:text-gray-500 active:text-gray-400 p-1">
                                   <span className="absolute -inset-1.5" />
                                   <span className="sr-only">View notifications</span>
                                   <BellIcon aria-hidden="true" className="size-6" />
                              </button>

                              <Link href={`/cart`}>
                                   <button type="button" className="relative rounded-full text-gray-400 hover:text-gray-500 active:text-gray-400 p-1">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View Cart</span>
                                        <ShoppingCartIcon aria-hidden="true" className="size-6" />
                                   </button>
                              </Link>

                              {/* Profile dropdown */}
                              <Signin />
                         </div>
                    </div>
               </div>

               <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                         {navigation.map((item) => (
                              <DisclosureButton
                                   key={item.name}
                                   as="a"
                                   href={item.href}
                                   aria-current={item.current ? 'page' : undefined}
                                   className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-slate-700 hover:bg-slate-300',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                   )}
                              >
                                   {item.name}
                              </DisclosureButton>
                         ))}
                    </div>
               </DisclosurePanel>
          </Disclosure>
     )
}

export default Navbar
