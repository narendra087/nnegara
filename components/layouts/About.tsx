import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion'

import ProfileImage from '../../public/images/bg.jpg'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='about-section relative h-screen md:pt-[90px] pt-[68px] pb-10 text-center md:text-left max-w-7xl md:px-10 px-5 xl:mx-auto mx-5 flex flex-col items-center overflow-hidden'
    >
      <h3 className='uppercase tracking-[15px] relative left-[15px] md:text-2xl text-xl'>About Me</h3>
      
      <div className='flex flex-col md:flex-row gap-5 py-5 md:py-0 my-auto items-center relative'>
        <motion.div
          className='w-48 h-48 rounded-full object-cover flex-shrink-0 md:rounded-xl md:w-64 md:h-96 relative z-10'
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            className='w-48 h-48 rounded-full object-cover flex-shrink-0 md:rounded-xl md:w-64 md:h-96'
            src={ProfileImage}
            alt='about-image'
          />
        </motion.div>
        <motion.div
          className='circle z-0 circle-orange-1 lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] transition-all duration-300 absolute  md:bg-[#C84B31] bg-[#191919] rounded-[25%] rotate-[30deg] -bottom-[250px] -left-[250px]'>
        </motion.div>
        
        <div className="px-0 md:px-5 flex flex-col gap-4 relative z-10">
          <h4 className="lg:text-4xl md:text-3xl text-xl font-semibold text-[#C84B31]">
            Just a little background
          </h4>
          <p className='md:text-md text-sm'>
            A <span className='text-[#C84B31] underline underline-offset-4 decoration-[#C84B31]'>Front End Developer</span> with 3+ years of experience working in the technology industry. Familiar with web developer skills such as JavaScript, NuxtJS, VueJS, Vuex, NextJS, ReactJS, Sass, TailwindCSS, HTML5, CSS, Laravel, CodeIgniter and still learning for AngularJS, Refine and Remix.
          </p>
          <p className='md:text-md text-sm'>I am interested in front end development, and want to learn about front end technology that I have never mastered.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About