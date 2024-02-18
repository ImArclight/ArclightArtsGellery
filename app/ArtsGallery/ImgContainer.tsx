import Image from "next/image";
import art1 from '../assets/Art1.png'
import art2 from '../assets/Art9.png'
import art3 from '../assets/Art2.png'
import art4 from '../assets/Art4.png'
import art5 from '../assets/Art12.png'
import art6 from '../assets/Art3.png'
import art7 from '../assets/Art7.png'
import art8 from '../assets/Art8.png' 
import art9 from '../assets/Art6.png'
import art12 from '../assets/Art5.png' 
import logo from '../assets/Logo.png'
import React from 'react'
import Navbar from "../component/Navbar";


export default function ImgContainer() {


  
  return (
    <div>
      <div className="mt-40">
        <h2 className="justify-center items-center text-center text-4xl leading-tight animate-fadeIn text-white">My Artworks</h2>
      </div>
      <div className="container mx-auto p-4 w-10/12  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center text-center m-auto ">
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art1} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art2} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art3} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art4} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art5} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art6} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art7} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art8} alt={""} />
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400" src={art9} alt={""} />
        </div>
        <div>
          <Image className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-3xl border-solid border-4 border-emerald-400 m-auto md:w-4/12 mt-6" src={art12} alt={""} />
        </div>
      </div>
    </div>
  )
}
