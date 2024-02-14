import React from 'react'
import Navbar from '../component/Navbar'
import Image from 'next/image'
import logo_img from '../assets/Logo.png'
import { SocialIcon } from 'react-social-icons'




export default function Main() {

    
  return ( 
    <div>
        
        <Navbar />
        <br />
        <div className='justify-center items-center'>
            <Image src={logo_img} alt=''
            className='rounded-lg w-40 h-40 m-auto  '
            />
        </div>
        <br />
        <div className='text-3xl text-red-600 justify-center items-center text-center'>
            <p className='animate-bounce animate-infinite font-bold'>Arclight</p>
        </div>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:opacity-100"/>
        <br />
        <div className='desc'>
          <p>I'm a self-learning person that interested in 
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

        

    </div>
  )
}
