'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/app/component/Navbar'
import ImgContainer from '../ArtsGallery/ImgContainer'

const variants = {
  hidden: {opacity: 0, x: 200}, 
  enter: {opacity: 1, x: 0},
  exit: {opacity: 0, x:-200}
}
 
export default function Collection() {
  return (
    <div>
      <Navbar />
      <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{delay: .2, type: 'linear'}}
    >
      <ImgContainer />
      <br /> 
    </motion.main>
    </div>
    
  ) 
}
 