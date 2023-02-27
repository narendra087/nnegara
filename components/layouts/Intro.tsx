import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion'

import ProfileImage from '../../public/images/profile-intro.png'
import Code from '../../public/icons/code.svg'

const Intro = () => {
  return (
    <div className='flex gap-4 px-5 max-w-7xl mx-auto min-h-[calc(100vh-90px)] bg-[#191919]'>
      <div className='picture-section flex-1 relative'>
        <motion.div
          
          className='circle circle-orange-2 w-[380px] h-[380px] absolute top-1/3 left-10 bg-[#ECDBBA] rounded-[25%] rotate-[30deg]'></motion.div>
        <motion.div
          initial={{
            // x: -500,
            opacity: 0,
          }}
          animate={{
            // x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            className='absolute bottom-0 left-1/2 -translate-x-1/2'
            src={ProfileImage}
            alt="profile-image"
          />
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 pt-20 relative">
        <h1 className='text-[50px]'>Hi, I Am</h1>
        <h2 className='text-[35px] text-transparent bg-clip-text bg-gradient-to-tr from-[#C84B31] to-[#ECDBBA]'>Narendra Puspa Adi Negara</h2>
        <p>
          <span className='underline underline-offset-4 decoration-[#C84B31]'>Frontend Developer</span> with 3+ years experience in technology industry.<br /> Deliver <span className='underline underline-offset-4 decoration-[#C84B31]'>clean code</span> and producing the <span className='underline underline-offset-4 decoration-[#C84B31]'>good product</span>.
        </p>
        <nav className='flex gap-4 mt-6'>
          <a className='hover:text-[#C84B31] transition-colors duration-300 py-2 px-4 bg-[#ECDBBA] text-[#191919] rounded-xl' href="#about">About</a>
          <a className='hover:text-[#C84B31] transition-colors duration-300 py-2 px-4 bg-[#ECDBBA] text-[#191919] rounded-xl' href="#experience">Experience</a>
          <a className='hover:text-[#C84B31] transition-colors duration-300 py-2 px-4 bg-[#ECDBBA] text-[#191919] rounded-xl' href="#portfolio">Portfolio</a>
        </nav>
        <div className='absolute bottom-0 right-0 text-[200px] text-[#C84B31] opacity-60'>
          {/* <Code /> */}
          {"</>"}
        </div>
      </div>
    </div>
  )
}

export default Intro