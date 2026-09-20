import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen h-full bg-green-50'>
        <p className='font-bold text-[50px]'>ABOUT US</p>
        <Link href={"/"} className='bg-green-700 rounded-2xl px-6 py-3 text-white font-bold'>
            Back
        </Link>
    </div>
  )
}
