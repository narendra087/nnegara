import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

import logo from '../../public/images/logo.png'

import { BiEnvelope } from 'react-icons/bi'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='fixed w-screen left-1/2 -translate-x-1/2 lg:h-[90px] h-[60px] items-center top-0 md:p-5 py-1 px-5 flex justify-between max-w-7xl mx-auto z-50 xl:items-center transition-all duration-300'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center gap-5 self-center'
      >
        {/* <a target="_blank" rel="noreferrer" href='https://linkedin.com/in/narendranegara'>
          <BsLinkedin size={22} style={{fill: '#C84B31'}} />
        </a>
        <a target="_blank" rel="noreferrer" href='https://github.com/narendra087'>
          <BsGithub size={22} style={{fill: '#C84B31'}} />
        </a> */}
        <Image src={logo} alt="nnegara logo" width={200} height={50} />
        {/* <p  className='md:text-2xl text-xl font-bold text-[#C84B31]'><span style={{fontFamily: 'Fira Code'}}>{'</>'}</span> {'NNEGARA'}</p> */}
      </motion.div>
      
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex text-gray-300 cursor-pointer gap-3'
      >
        <BiEnvelope size={22} style={{fill: '#C84B31'}} />
        <p className='uppercase hidden md:block text-sm text-gray-400'>Get in Touch</p>
      </motion.div>
    </header>
  )
}

export default Header