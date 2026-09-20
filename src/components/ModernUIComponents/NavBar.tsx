'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

// Create new array
const links = [
    { label: "Home", url: "/ModernUI"},
    { label: "Services", url: "/ModernUI/services"},
    { label: "About", url: "/ModernUI/about"},
    { label: "Contact", url: "/ModernUI/contact"},
    { label: "Login", url: "/ModernUI/login"},
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

  return (
    <header className='relative flex h-20 items-center justify-between w-full bg-nav px-5 md:h-[105px] md:px-[35px]'>
        <p className='text-2xl font-bold md:text-[30px] text-white'>{pathname}</p>
        <nav id='main-nav' className='absolute top-18 left-0 z-50 bg-nav w-full md:static md:block md:w-auto'>
            <ul className='flex flex-col py-2.5 md:flex-row md:gap-[38px] md:py-0'>
                {links.map(({ label, url}) => {
                    return (
                        <li key={url}>
                            <Link className='text-white' href={url}>{label}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </header>
  )
}
