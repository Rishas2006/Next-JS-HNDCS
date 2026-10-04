import PageLayout from '@/components/PageLayout'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = { title: "About" };

const boxes = [
  {
    title: "Who We Are",
    paragraphs: [
      "ModernUI is a web development and design team focused on creating simple, beautiful, and high-performance websites.",
      "Our goal is to help businesses build a strong online presence using modern technologies and user-friendly designs."
    ]
  },
  {
    title: "Our Mission",
    paragraphs: [
      "Our mission is to make web development simple, accessible, and effective.",
      "We focus on performance, responsive design, usability, and modern user experiences."
    ]
  }
];

export default function About() {
  return (
    <PageLayout title='About ModernUI' description='We build modern digital experiences for businesses and individuals.'>
      <section className='mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
        {boxes.map((box, i) => (
          <article key={i} className='rounded-card bg-white p-[25px] text-ink shadow-card xs:p-10'>
            <h2 className='mb-5 text-[30px] font-bold'>{box.title}</h2>
            {box.paragraphs.map((text, index) => (
              <p key={index} className='mb-[15px] text-lg leading-[1.7]'>{text}</p>
            ))}
          </article>
        ))}
      </section>
    </PageLayout>
  )
}
