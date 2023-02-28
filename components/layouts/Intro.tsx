import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion'

import ProfileImage from '../../public/images/profile-intro.png'
import Code from '../../public/icons/code.svg'

const Intro = () => {
  return (
    <div className='intro-section flex flex-col-reverse lg:flex-row gap-4 px-5 max-w-7xl xl:mx-auto mx-5 md:min-h-[calc(100vh-90px)] min-h-[calc(100vh-58px)] bg-[#191919] lg:rounded-t-[100px] rounded-t-[50px] transition-all duration-300'>
      <div className='picture-section flex-1 relative'>
        <motion.div
          className='circle circle-orange-2 lg:w-[380px] lg:h-[380px] w-[200px] h-[200px] transition-all duration-300 absolute lg:top-1/3 lg:left-10 right-5 bottom-10 bg-[#ECDBBA] rounded-[25%] rotate-[30deg]'></motion.div>
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
            className='absolute bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:m-0 lg:w-[375px] w-[200px] right-0 -mr-5 transition-all duration-300'
            src={ProfileImage}
            alt="profile-image"
          />
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 lg:pt-20 relative pt-10 text-center lg:text-left">
        <h1 className='lg:text-[50px] md:text-[30px] text-[24px]'>Hi, I Am</h1>
        <h2 className='md:text-[35px] text-[24px] leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#C84B31] to-[#ECDBBA]'>Narendra Puspa Adi Negara</h2>
        <p className='mt-2 lg:text-base md:text-sm text-xs'>
          <span className='underline underline-offset-4 decoration-[#C84B31]'>Frontend Developer</span> with 3+ years experience in technology industry.<br /> Deliver <span className='underline underline-offset-4 decoration-[#C84B31]'>clean code</span> and producing the <span className='underline underline-offset-4 decoration-[#C84B31]'>good product</span>.
        </p>
        <nav className='flex gap-4 mt-6 justify-center lg:justify-start'>
          <a className='hover:text-[#C84B31] transition-colors duration-300 lg:py-2 lg:px-4 py-1.5 px-2 lg:text-base text-sm bg-[#ECDBBA] text-[#191919] rounded-xl' href="#about">About</a>
          <a className='hover:text-[#C84B31] transition-colors duration-300 lg:py-2 lg:px-4 py-1.5 px-2 lg:text-base text-sm bg-[#ECDBBA] text-[#191919] rounded-xl' href="#experience">Experience</a>
          <a className='hover:text-[#C84B31] transition-colors duration-300 lg:py-2 lg:px-4 py-1.5 px-2 lg:text-base text-sm bg-[#ECDBBA] text-[#191919] rounded-xl' href="#portfolio">Portfolio</a>
        </nav>
        <div className='lg:block hidden absolute bottom-0 lg:right-0 text-[200px] text-[#C84B31] opacity-40'>
          {/* <Code /> */}
          {"</>"}
        </div>
      </div>
    </div>
  )
}

export default Intro