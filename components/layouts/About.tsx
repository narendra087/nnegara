import React from 'react'
import Image from "next/image";
import CountUp from 'react-countup';
import { motion } from 'framer-motion'

import ProfileImage from '../../public/images/bg02.jpg'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='section relative h-screen md:pt-[90px] pt-[70px] pb-10 text-center md:text-left max-w-7xl md:px-10 px-5 xl:mx-auto mx-5 flex flex-col items-center overflow-hidden'
    >
      <h3 className='uppercase tracking-[15px] relative left-[15px] md:text-2xl text-xl'>About Me</h3>
      
      <div className='flex flex-col md:flex-row-reverse gap-5 py-5 md:py-0 my-auto items-center relative max-w-4xl'>
        <motion.div
          className='w-48 h-48 rounded-full object-cover flex-shrink-0 md:rounded-xl md:w-64 md:h-96 relative z-10'
          initial={{
            x: 200,
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
            className='w-48 h-48 rounded-full object-cover flex-shrink-0 md:rounded-xl md:w-auto md:h-auto object-bottom md:object-none'
            src={ProfileImage}
            alt='about-image'
          />
        </motion.div>
        <motion.div
          className='circle z-0 circle-orange-2 lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] transition-all duration-300 absolute  md:bg-[#191919] bg-[#191919] rounded-[25%] rotate-[30deg] -bottom-[250px] -left-[250px] lg:-left-[400px]'>
        </motion.div>
        
        <div className="px-0 md:px-5 flex flex-col gap-4 relative z-10">
          <motion.div
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
            className="flex flex-col gap-4"
          >
            <h4 className="md:text-3xl text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-[#C84B31] to-[#ECDBBA]">
              A Front-end Developer with over 3 years of experience.
            </h4>
            <p className='md:text-md text-sm'>
              Familiar with web developer skills and tools such as JavaScript, TypeScript, NuxtJS, VueJS, Vuex, NextJS, ReactJS, Redux, Sass, TailwindCSS, HTML, CSS, Laravel, CodeIgniter and still learning for AngularJS, Refine and Remix.
            </p>
          </motion.div>
          <motion.div
            initial={{
              y: 80,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.5
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex items-center gap-5 mx-auto md:mx-0"
          >
            <div className="flex flex-col gap-1 max-w-[80px]">
              <CountUp end={3} suffix="+" className="md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#C84B31] to-[#ECDBBA]" />
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="flex flex-col gap-1 max-w-[80px]">
              <CountUp end={5} className="md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#C84B31] to-[#ECDBBA]" />
              <p className="text-sm">Projects Completed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About