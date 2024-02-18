'use client'

import React from 'react'
import Link from 'next/link'
import SwitchTheme from './SwitchTheme'
import Dark from './dark'
import { useEffect, useState } from 'react'
 
 
export default function Navbar() {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 300) { // Change 100 to the desired scroll offset
              setHideNavbar(true);
          } else {
              setHideNavbar(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`sm:relative w-full z-10 transition-colors duration-300 bg-transparent sm:sticky top-0 hidden sm:block ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="navbar w-10/12 m-auto rounded-br-2xl rounded-bl-2xl">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-4">
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/'}>
                        Home
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/About'}>
                        About
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/ArtsGallery'}>
                        Arts Gallery
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/Others'}>
                        Others
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='theme'>
                <SwitchTheme />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`sm:relative w-full z-10 transition-colors duration-300 bg-transparent sm:sticky top-0 block sm:hidden`}>
        <div className="navbar w-full m-auto rounded-br-2xl rounded-bl-2xl">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="sm:ml-6 sm:block">
                  <ul className="flex space-x-4">
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/'}>
                        Home
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/About'}>
                        About
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/ArtsGallery'}>
                        Arts Gallery
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-700 hover:text-teal-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link href={'/Others'}>
                        Others
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='theme'>
                <SwitchTheme />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}