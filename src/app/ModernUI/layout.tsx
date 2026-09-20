import NavBar from '@/components/ModernUIComponents/NavBar'
import React from 'react'

export default function layout({children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className='bg-blue-200 flex flex-col items-stretch justify-start min-h-screen h-screen'>
      <NavBar/>
      {children}
    </div>
  )
}
