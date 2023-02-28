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
      className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-7 sm:px-10 pt-[130px] justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[15px] text-2xl'>About</h3>
      
      <motion.div
        className='w-56 h-56 rounded-full object-cover flex-shrink-0 md:rounded-xl md:w-64 md:h-96'
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
          className='w-56 h-56 rounded-full object-cover flex-shrink-0 md:rounded-xl md:w-64 md:h-96'
          src={ProfileImage}
          alt='about-image'
        />
      </motion.div>
      
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Just a little background
        </h4>
        <p>
        Experienced Web Developer with a demonstrated history of working in the technology industry. Skilled in JavaScript, Typescript, React.js, Next.js, Vue.js, Nuxt.js, Laravel, Sass, Git.
        Still learning for AngularJS, and other frontend technology.
        
        Strong engineering professional with a Bachelor of Technology focused in Information System from Institute Technology Sepuluh Nopember (ITS) Surabaya.
        </p>
      </div>
    </motion.div>
  )
}

export default About