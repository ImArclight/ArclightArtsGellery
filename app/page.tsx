'use client'

import React from 'react'
import Main from './pages/main'
import ArtsGallery from './pages/artsgallery'
import Others from './pages/others'
import Projects from './pages/projects'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Page() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/artsgallery' element={<ArtsGallery />} />
          <Route path='/others' element={<Others />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
 