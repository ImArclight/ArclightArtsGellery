import React from 'react'
import Navbar from '../component/Navbar'
import img1 from '../assets/fgojp.png'
import Image from 'next/image'


export default function Others() {
  return (
    <div>
      <Navbar />
      <br />
      <p className='text-4xl justify-center items-center text-center'>Others</p>
      <br />
      <br />
      <p className='text-2xl '>Feel Free to Add Me</p>
      <br />
      <br />
      <div>
        <p>Fate/Grand Jp</p>
        <p className='text-red-600'>961,364,758</p>
        <Image className='max-w-sm' src={img1} alt={''} />
      </div>
    </div>
  )
}
 