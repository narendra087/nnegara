import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from '../ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='h-screen flex relative overflow-hidden text-left flex-col md:flex-row max-w-full px-10 pt-[130px] justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[15px] text-2xl'>Experience</h3>
      
      <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience