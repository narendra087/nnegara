import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion'

import ProfileImage from '../../public/images/profile-intro.png'
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';

const Intro = () => {
  return (
    <div className='section section-intro flex flex-col lg:flex-row gap-4 px-5 max-w-7xl xl:mx-auto mx-5 md:min-h-[calc(100vh-90px)] min-h-[calc(100vh-58px)] bg-[#191919] lg:rounded-t-[100px] rounded-t-[50px] transition-all duration-300'>
      <div className='picture-section flex-1 relative items-center flex lg:block pt-5 max-h-80 lg:max-h-full'>
        <div
          className='circle circle-orange-2 lg:w-[380px] lg:h-[380px] w-[200px] h-[200px] transition-all duration-300 lg:absolute lg:bottom-[50px] lg:left-10 right-5 bottom-10 bg-[#ECDBBA] rounded-[25%] rotate-[45deg] mx-auto lg:mx-0 overflow-hidden'>
            <Image
              className='relative lg:hidden bottom-0 min-w-[135px] w-[200px] transition-all duration-300 object-contain left-[calc(50%+5px)] top-[calc(50%+20px)] transform -translate-x-1/2 -translate-y-1/2 -rotate-[45deg]'
              src={ProfileImage}
              alt="profile-image"
            />
        </div>
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
          className="absolute lg:static left-1/2 -translate-x-1/2 lg:left-0 lg:transform-none"
        >
          <Image
            className='lg:absolute hidden lg:block relative bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:m-0 lg:w-[375px] min-w-[135px] w-[200px] right-0 -mr-5 transition-all duration-300 object-cover'
            src={ProfileImage}
            alt="profile-image"
          />
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 lg:pt-20 relative pt-0 text-center lg:text-left">
        <motion.div
          initial={{
            opacity: 0,
            bottom: -80
          }}
          animate={{
            opacity: 1,
            bottom: 0,
          }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
          }}
          className='flex flex-col relative z-10'
        >
          <h1 className='lg:text-[50px] md:text-[30px] text-[24px] z-10'>Hi, I Am</h1>
          <h2 className='md:text-[35px] text-[24px] leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#C84B31] to-[#ECDBBA] z-10'>Narendra Puspa Adi Negara</h2>
          <p className='mt-2 lg:text-base md:text-sm text-xs z-10'>
            <span className='underline underline-offset-4 decoration-[#C84B31]'>Frontend Developer</span> with 3+ years experience in technology industry.<br /> Deliver <span className='underline underline-offset-4 decoration-[#C84B31]'>clean code</span> and producing the <span className='underline underline-offset-4 decoration-[#C84B31]'>good product</span>.
          </p>
          <div className='flex gap-4 mt-6 justify-center lg:justify-start z-10'>
            <a target="_blank" rel="noreferrer" href='https://linkedin.com/in/narendranegara'>
              <BsLinkedin size={24} style={{fill: '#C84B31'}} />
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/narendra087'>
              <BsGithub size={24} style={{fill: '#C84B31'}} />
            </a>
            <a target="_blank" rel="noreferrer" href='https://t.me/narendranegara'>
              <BsTelegram size={24} style={{fill: '#C84B31'}} />
            </a>
          </div>
          <a href="documents/CV_Narendra.pdf" className='btn btn-primary max-w-[160px] w-full mt-10 mx-auto lg:mx-0 relative z-10' download={true}>Download CV</a>
        </motion.div>
        <div className='lg:block absolute bottom-0 right-0 lg:text-[200px] text-[150px] text-[#C84B31] opacity-30 z-0'>
          {/* <Code /> */}
          {"</>"}
        </div>
      </div>
    </div>
  )
}

export default Intro