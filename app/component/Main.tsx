import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import logo_img from '../assets/Logo.png'




export default function Main() {

    

  return (
    <div>
        
        <Navbar />
        <br />
        <div className='justify-center items-center'>
            <Image src={logo_img} alt=''
            className='rounded-lg w-40 h-40 m-auto '
            />
        </div>
        <br />
        <div className='text-3xl text-red-600 justify-center items-center text-center'>
            <p>Feika</p>
        </div>
        <hr/>

        <div>
            <p></p>
        </div>


    </div>
  )
}
