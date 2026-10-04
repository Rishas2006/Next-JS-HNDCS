import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <main className='flex min-h-[calc(100vh-80px)] items-center justify-center bg-linear-120/srgb from-brand-blue to-brand-purple text-center md:min-h-[calc(100vh-105px)]'>
      <div className='max-w-[1000px] px-5 py-10'>
        <h1 className='mb-[45px] text-white text-[38px] leading-[1.15] font-bold xs:text-5xl md:text-[80px]'>
          Elevate Your Web <br />
          Experience
        </h1>
        <p className='text-white mb-[45px] text-lg font-semibold xs:text-[22px] md:text-[32px]'>
          Create modern, fast, and responsive websites with ease.
        </p>
        <Link className='inline-block rounded-[40px] bg-accent px-[30px] py-4 text-lg font-bold text-white transition duration-300 hover:-translate-y-[3px] hover:bg-accent-hover md:px-[38px] md:text-[25px]' href={"/ModernUI/services"}>Explore Services</Link>
      </div>
    </main>
  )
}
