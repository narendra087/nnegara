import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion'

import glovory from '../public/images/glovory.jpeg'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[calc(100vw-150px)] md:w-[500px] xl:w-[600px] snap-center bg-[#395B64]/50 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-300 overflow-hidden'>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
      >
        <Image
          className='w-32 h-32 rounded-full object-cover object-center'
          src={glovory}
          alt='about-image'
        />
      </motion.div>
      
      <div className='px-0'>
        <h4 className='text-4xl font-light'>Frontend Developer</h4>
        <p className='font-bold text-2xl mt-1 '>Glovory</p>
        <div className='flex space-x-2 my-2'>
          <Image
            className='h-10 w-10 rounded-full'
            src={glovory}
            alt=''
          />
          <Image
            className='h-10 w-10 rounded-full'
            src={glovory}
            alt=''
          />
        </div>
        <p className='uppercase py-5'>Start date</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Job Description</li>
          <li>Job Description</li>
          <li>Job Description</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard