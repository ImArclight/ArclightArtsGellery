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
import Link from "next/link";
import Navbar from "../component/Navbar";


export default function ImgContainer() {

  return (
    <div>
      <div className="mt-12 md:mt-40">
        <h2 className="justify-center items-center text-center text-4xl leading-tight animate-fadeIn text-white">My Artworks</h2>
      </div>

      <div className="container mx-auto p-4 w-10/12  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center text-center m-auto ">
          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art1} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 bg-black rounded-[30px] opacity-0 hover:opacity-50 transition duration-300 justify-center items-center">
                <p className='italic text-center text-rose-600 pt-[150px]'>Grete</p>
                <p className='italic text-center text-rose-600'>(Daughter Dearest)</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art2} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 bg-black rounded-[30px] opacity-0 hover:opacity-50 transition duration-300 justify-center items-center">
                <p className='italic text-center text-violet-600 pt-[150px]'>Thea</p>
                <p className='italic text-center text-violet-600'>Dreamspeaker</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art3} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300 justify-center items-center">
                <p className='italic text-center text-sky-300 pt-[180px]'>Takina Inoue</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art4} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300 justify-center items-center">
                <p className='italic text-center text-pink-300 pt-[120px]'>Mori Calliope</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art5} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300  justify-center items-center">
                <p className='italic text-center text-yellow-300 pt-[150px]'>Angelina Kudou Shield</p>
                <p className='italic text-center text-yellow-300'>(Angie Sirius)</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art6} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300 justify-center items-center">
                <p className='italic text-center text-violet-400 pt-[120px]'>Arisu Sakayanagi</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art7} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300 justify-center items-center">
                <p className='italic text-center pt-[250px] text-red-500'>W</p>
                <p className='italic text-center text-red-500'>Arknights</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art8} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300  justify-center items-center">
                <p className='italic text-center pt-[250px] text-red-600'>Maya Satou</p>
              </div>
            </div>
          </Link>

          <Link href={'/Collection'} className=''>
            <div className="relative">
              <Image src={art9} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
              <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300 justify-center items-center">
                
              </div>
            </div>
          </Link>
          
        </div>

        <div className="md:w-4/12 mt-6 m-auto justify-center items-center">
          <Link href={'/Collection'} className=''>
              <div className="relative">
                <Image src={art12} alt={''} className='rounded-[30px] border-solid border-4 border-emerald-400' />
                <div className="absolute inset-0 rounded-[30px] bg-black opacity-0 hover:opacity-50 transition duration-300  justify-center items-center">
                  <p className='italic text-center text-cyan-400 pt-[250px]'>Young Version of Khun Maschenny Zahard</p>
                </div>
              </div>
            </Link>
        </div>
      </div>
    </div>
  ) 
}
