'use client'

import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Image from 'next/image';
import logo_img from '../assets/Logo.png';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CgChevronRight } from "react-icons/cg";
import art1 from '../assets/samp1.png'
import art2 from '../assets/samp2.png'
import art3 from '../assets/samp3.png'
import { FaAddressCard } from "react-icons/fa";
import { BiImage } from "react-icons/bi";


const variants = {
  hidden: {opacity: 0, x: 200}, 
  enter: {opacity: 1, x: 0},
  exit: {opacity: 0, x:-200}
}

export default function ArtsGallery() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      <Navbar />
      <div className='md:w-11/12 m-auto md:flex gap-5 mb-7 flex-col-reverse md:flex-row'>
        <div className='block'>
          <div className="card relative rounded-3xl h-96 m-auto md:ml-12 mt-12 md:mt-40 md:w-[250px] md:min-w-[250px]">
            <div className='p-6'>
            <Link href={'/About'}>
                <div className="relative">
                  <Image
                    src={logo_img}
                    alt=''
                    className='w-40 h-40 rounded-3xl hover m-auto justify-center overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105'
                  />
                  <div className="absolute w-40 h-40 inset-0 rounded-3xl bg-black opacity-0 hover:opacity-50 transition duration-300 flex justify-center items-center m-auto">
                    <p className='italic text-center m-auto text-cyan-400'>
                      <FaAddressCard size={70} />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <br />
            <div className='text-3xl text-center'>
              <p className='animate-bounce animate-infinite font-bold'>Arclight</p>
            </div>
            <br />
            <div className='socIcon'>
              <SocialIcon className='transform motion-safe:hover:scale-110 duration-200'  network='github' url='https://github.com/ImArclight' />
              <SocialIcon className='transform motion-safe:hover:scale-110 duration-200' network='twitter' url='https://twitter.com/ImArclight' />
              <SocialIcon className='transform motion-safe:hover:scale-110 duration-200' url='https://www.instagram.com/fsptraaaa_altern/' />
            </div>
          </div>

          <motion.main 
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{delay: .2, type: 'linear'}}
              className='flex-1'
            >
            <div className="card relative rounded-3xl h-40 m-auto md:ml-12 mt-5 md:w-[250px] md:min-w-[250px]">
                
                  <Link className='' href={'/Collection'}>
                    <BiImage size={40} className='ml-5 mt-4 absolute rounded-2xl hover:bg-sky-400 duration-300 h-[40px]'/>
                    <p className='absolute ml-[70px] mt-6 rounded-[10px] hover:bg-sky-400 duration-300 '>See My Artworks</p>
                  </Link>

            </div>
          </motion.main>
        </div>

        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{delay: .2, type: 'linear'}}
          className='flex-1'
        >
          <div className='card relative rounded-3xl md:mr-12 h-48 m-auto md:mt-40 mt-5 md:min-w-[250px]'>
            <div className='flex'>
              <Link href={'/Collection'} className='w-[250px] '>
                <div>
                  <Image src={art1} alt={''} className=' absolute w-[250px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 ' />
                  <div className="absolute inset-0 w-[250px] h-[170px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 bg-black opacity-0 hover:opacity-50 transition duration-300 overflow-hidden">
                    <p className='italic text-center text-cyan-400 pt-[100px]'>Young Version of Khun Maschenny Zahard</p>
                  </div>
                </div>
              </Link>
            </div>

            <p className='absolute left-[250px]'>
              <p className='pl-8 md:text-2xl font-bold mt-[12px]'>February 15 2023</p>
              <br />
              <p className='mx-8'><Link href={'/Others'}><span className='text-blue-500 hover:bg-sky-400 hover:rounded-sm'></span></Link></p>
            </p>
            <Link href={'/Collection'} className='flex'>
              <CgChevronRight size={70} className='absolute hidden md:block md:hover:bg-sky-400 md:hover:rounded-2xl h-[120px] top-1/2 transform -translate-y-1/2 right-4 duration-300'/>
            </Link>
          </div>

          <div className='card relative rounded-3xl md:mr-12 h-48 m-auto mt-5 md:min-w-[250px]'>
            <div className='flex'>
              <Link href={'/Collection'} className='w-[250px] '>
                <div>
                  <Image src={art2} alt={''} className=' absolute w-[250px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 ' />
                  <div className="absolute inset-0 w-[250px] h-[170px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 bg-black opacity-0 hover:opacity-50 transition duration-300 overflow-hidden">
                    <p className='italic text-center text-yellow-300 pt-[100px]'>Angelina Kudou Shield</p>
                    <p className='italic text-center text-yellow-300'>(Angie Sirius)</p>
                  </div>
                </div>
              </Link>
            </div>

            <p className='absolute left-[250px]'>
            <p className='pl-8 md:text-2xl font-bold mt-[12px]'>February 15 2023</p>
              <br />
              <p className='mx-8'><Link href={'/Others'}><span className='text-blue-500 hover:bg-sky-400 hover:rounded-sm'></span></Link></p>
            </p>
            <Link href={'/Collection'} className='flex'>
              <CgChevronRight size={70} className='absolute hidden md:block md:hover:bg-sky-400 md:hover:rounded-2xl h-[120px] top-1/2 transform -translate-y-1/2 right-4 duration-300'/>
            </Link>
          </div>

          <div className='card relative rounded-3xl md:mr-12 h-48 m-auto mt-5 md:min-w-[250px]'>
            <div className='flex'>
              <Link href={'/Collection'} className='w-[250px] '>
                <div>
                  <Image src={art3} alt={''} className=' absolute w-[250px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 ' />
                  <div className="absolute inset-0 w-[250px] h-[170px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 bg-black opacity-0 hover:opacity-50 transition duration-300 overflow-hidden">
                    <p className='italic text-center text-pink-500 pt-[100px]'>Mori Calliope</p>
                  </div>
                </div>
              </Link>
            </div>

            <p className='absolute left-[250px]'>
            <p className='pl-8 md:text-2xl font-bold mt-[12px]'>February 15 2023</p>
              <br />
              <p className='mx-8'><Link href={'/Others'}><span className='text-blue-500 hover:bg-sky-400 hover:rounded-sm'></span></Link></p>
            </p>
            <Link href={'/Collection'} className='flex'>
              <CgChevronRight size={70} className='absolute hidden md:block md:hover:bg-sky-400 md:hover:rounded-2xl h-[120px] top-1/2 transform -translate-y-1/2 right-4 duration-300'/>
            </Link>
          </div>
        </motion.main>
      </div>
    </div>
  )
}
