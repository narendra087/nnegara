import React from 'react'
import Image from "next/image";

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle'

import ProfileImage from '../../public/images/profile.jpg'
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, Narendra here.",
      "Welcome to my portofolio website."
    ],
    loop: true,
    delaySpeed: 1500,
  })
  
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <div className='space-y-7'>
        <Image
          className='relative rounded-full h-32 w-32 mx-auto object-cover object-center'
          src={ProfileImage}
          alt="profile-image"
        />
        <div className='relative z-10'>
          <h2 className='text-sm uppercase pb-2 tracking-[15px]'>Frontend Developer</h2>
          <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
            <span className='mr-3'>{text}<Cursor cursorColor='#E7F6F2' /></span>
          </h1>
        </div>
        
        <div className='relative z-10'>
          <Link href={'#about'}>
            <button className='hero-button'>About</button>
          </Link>
          <Link href={'#experience'}>
            <button className='hero-button'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='hero-button'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='hero-button'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero