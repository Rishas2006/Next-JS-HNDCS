'use client'
import { Menu, X } from 'lucide-react';
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
        <p className='text-2xl font-bold md:text-[30px] text-white'>ModernUI</p>
        <nav id='main-nav' className={`${open ? "block" : "hidden"} absolute top-18 left-0 z-50 bg-nav w-full md:static md:block md:w-auto`}>
            <ul className='flex flex-col py-2.5 md:flex-row md:gap-[38px] md:py-0'>
                {links.map(({ label, url}) => {
                    const isActive = pathname === url;

                    return (
                        <li key={url} className='p-[15px] text-center md:p-0'>
                            <Link className={`text-xl font-bold transition-colors duration-300 hover:text-accent md:text-[25px] ${isActive ? "text-accent" : "text-white"}`} href={url}>{label}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        <button type='button' aria-expanded={open} onClick={() => setOpen((value) => !value)} 
            className='text-white cursor-pointer text-[30px] md:hidden hover:text-accent'>
            {open ? <X /> : <Menu />}
        </button>
    </header>
  )
}
