'use client'

import React from 'react'
import Navbar from '../component/Navbar'
import Image from 'next/image'
import logo_img from '../assets/Logo.png'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const variants = {
  hidden: {opacity: 0, x: -200, y: 0},
  enter: {opacity: 1, x: 0, y:0},
  exit: {opacity: 1, x: 200, y:0}
}

export default function Main() { 
    
  return ( 
    <div>
        <Navbar />
        <div>

        </div>
        <br />
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{delay: .5, type: 'linear'}}
        >
          <div className="card w-52 rounded-3xl h-96 justify-center items-center m-auto ">
            <div className='justify-center items-center p-6'>
                <Image src={logo_img} alt=''
                className='w-40 h-40 m-auto rounded-3xl'
                />
            </div>
            <br />
            <div className='text-3xl text-red-600 justify-center items-center text-center'>
                <p className='animate-bounce animate-infinite font-bold'>Arclight</p>
            </div>
            <br />
            <div className='socIcon'>
              <SocialIcon className='transform motion-safe:hover:scale-110'  network='github' url='https://github.com/ImArclight' />
              <SocialIcon className='transform motion-safe:hover:scale-110' network='twitter' url='https://twitter.com/ImArclight' />
              <SocialIcon className='transform motion-safe:hover:scale-110' url='https://www.instagram.com/fsptraaaa_altern/' />
            </div>
          </div>
          
          <br />
          <div className='desc'>
            <p>Im a self proclaimed Artist that interested in 
              <span className='text-green-500 mx-1 text-1xl relative inline-block stroke-current'>
                something
              </span> 
              like Designing, Photography, Games, Music, Games, Novels, etc.</p>
          </div>
          <br />


          <div className='socIcon'>
            <SocialIcon className='transform motion-safe:hover:scale-110'  network='github' url='https://github.com/ImArclight' />
            <SocialIcon className='transform motion-safe:hover:scale-110' network='twitter' url='https://twitter.com/ImArclight' />
            <SocialIcon className='transform motion-safe:hover:scale-110' url='https://www.instagram.com/fsptraaaa_altern/' />
            <SocialIcon className='transform motion-safe:hover:scale-110' url="https://open.spotify.com/user/fqpl0bx8cfx7awx3w5zocqm80" />
            <SocialIcon className='transform motion-safe:hover:scale-110' url="https://www.youtube.com/channel/UCNcoL9BnCSHqvusWeU_vmPw" />
          </div>
        </motion.main>
    </div>
  )
}
