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
import {
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Ripple });


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
      <div className='md:w-11/12 m-auto md:flex gap-2'>
        <div className="card relative rounded-3xl h-96 m-auto md:ml-12 mt-12 md:mt-40 md:w-[250px] md:min-w-[250px]">
          <div className='p-6' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Link href={'/About'}>
              <div className="relative">
                <Image
                  src={logo_img}
                  alt=''
                  className='w-40 h-40 rounded-3xl hover m-auto justify-center overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105'
                />
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
          <div className='card relative rounded-3xl md:mr-12 h-48 m-auto mt-10 md:mt-40 md:min-w-[250px]'>
            <Link href={'/Collection'} className='w-[250px] '>
              <div>
                <Image src={art1} alt={''} className=' absolute w-[250px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 ' />
                <div className="absolute inset-0 w-[250px] h-[170px] rounded-[6px] top-1/2 transform -translate-y-1/2 left-4 bg-black opacity-0 hover:opacity-50 transition duration-300 overflow-hidden">
                  
                </div>
              </div>
            </Link>
            <Link href={'/Collection'} className=''>
              <CgChevronRight size={70} className='absolute hover:bg-sky-400 hover:rounded-2xl h-[120px] top-1/2 transform -translate-y-1/2 right-4 duration-300'/>
            </Link>
          </div>
        </motion.main>
      </div>
    </div>
  )
}
