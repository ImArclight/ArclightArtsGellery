'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
  

import React from 'react'

export default function SwitchTheme() {
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), []) 
 
  if (!mounted) return (
    <Image src={""} alt="Loading Light/Dark Toggle" width={50} height={50} sizes="50x50" title="Loading Light/Dark Toggle" priority={false} />
  ) 

  if (resolvedTheme == 'dark') {
    return <FiSun className="sun hover:text-teal-300" onClick={() => setTheme('light')} />
  }

  if (resolvedTheme == 'light') {
    return <FiMoon className="moon hover:text-teal-300" onClick={() => setTheme('dark')} />
  }
}
