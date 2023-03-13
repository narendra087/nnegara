import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

import logo from '../../public/images/logo.png'

import { BiEnvelope } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'

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
        <Image src={logo} alt="nnegara logo" className="h-[35px] md:h-[40px] lg:h-[50px] w-auto" />
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
        <a target="_blank" rel="noreferrer" href='https://t.me/narendranegara' className='flex items-center'>
          <FaTelegramPlane size={22} style={{fill: '#C84B31'}} />
          <p className='uppercase hidden md:block text-sm text-gray-400 ml-3'>Get in Touch</p>
        </a>
      </motion.div>
    </header>
  )
}

export default Header