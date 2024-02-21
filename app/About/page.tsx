'use client'

import React from 'react'
import Navbar from '../component/Navbar'
import Image from 'next/image'
import logo_img from '../assets/Logo.png'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dclogo from '../assets/Discord_Icon.png'
import xlogo from '../assets/xbox-icon.png'
import { FaAddressCard } from "react-icons/fa";


const variants = {
  hidden: {opacity: 0, x: 200}, 
  enter: {opacity: 1, x: 0},
  exit: {opacity: 0, x:-200}
}

export default function Page() {
  return (
    <div>
      <Navbar /> 
      <div className='md:w-11/12 m-auto md:flex gap-5'>
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
            <div className='card relative rounded-3xl h-auto md:h-96 md:mr-12 md:mt-40 md:ml-[10px]'>
              <p className='mt-8 pt-8 pl-8 text-4xl'>About Me</p>
              <br />
              <p className='mx-8'>I Love Persona 5 Royal</p>

              <div className='flex '>
                <Image src={dclogo} alt={''} className='w-10 ml-8 mt-10' />
                <p className='mt-11 ml-2'>FeiX#7222</p>
              </div>
              <div className='flex'>
                <Image src={xlogo} alt={''} className='w-9 ml-9 mt-10' />
                <p className='mt-11 ml-2'>ImArclight7714</p>
              </div>

            </div>
          </motion.main>


      </div>
    </div>
  )
}
