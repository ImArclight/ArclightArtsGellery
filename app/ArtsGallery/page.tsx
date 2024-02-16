'use client'

import React from 'react'
import ImgContainer from './ImgContainer'
import { motion } from 'framer-motion'
import Navbar from '../component/Navbar'


const variants = {
  hidden: {opacity: 0, x: 200},
  enter: {opacity: 1, x: 0},
  exit: {opacity: 0, x:-200}
}

export default function ArtsGallery() {
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
