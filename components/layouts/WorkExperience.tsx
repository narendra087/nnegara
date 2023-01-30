import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from '../ExperienceCard'

import glovory from '../../public/images/glovory.jpeg'
import onlist from '../../public/images/onlist.jpeg'

import remix from '../../public/images/remix.jpeg'
import refine from '../../public/images/refine.jpeg'
import next from '../../public/images/next.jpeg'
import react from '../../public/images/react.jpeg'
import ts from '../../public/images/ts.jpeg'
import sass from '../../public/images/sass.jpeg'
import angular from '../../public/images/angular.jpeg'

import vue from '../../public/images/vue.jpeg'
import nuxt from '../../public/images/nuxt.jpeg'
import js from '../../public/images/js.jpeg'
import laravel from '../../public/images/laravel.jpeg'

type Props = {}

const WorkExperience = (props: Props) => {
  const experienceList = [
    {
      image: glovory,
      work: 'Glovory',
      title: 'Frontend Developer',
      tools: [
        {
          image: remix,
          title: 'Remix',
          link: 'https://remix.run/'
        },
        {
          image: refine,
          title: 'Refine',
          link: 'https://refine.dev/'
        },
        {
          image: next,
          title: 'NextJS',
          link: 'https://nextjs.org/'
        },
        {
          image: react,
          title: 'ReactJS',
          link: 'https://reactjs.org/'
        },
        {
          image: angular,
          title: 'AngularJS',
          link: 'https://angular.io/'
        },
        {
          image: ts,
          title: 'TypeScript',
          link: 'https://typescriptlang.org/'
        },
        {
          image: sass,
          title: 'SASS',
          link: 'https://sass-lang.com/'
        }
      ],
      startDate: 'Feb, 07 2022',
      endDate: 'Present',
      jobDesc: [
        'Develop Hotel Management System, using Refine and Remix (ReactJS)',
        'Bug fixing "Special Education IMS (Himmaty) project, using AngularJS',
      ]
    },
    {
      image: onlist,
      work: 'OnList',
      title: 'Frontend Developer',
      tools: [
        {
          image: nuxt,
          title: 'NuxtJS',
          link: 'https://nuxtjs.org/'
        },
        {
          image: vue,
          title: 'VueJS',
          link: 'https://vuejs.org/'
        },
        {
          image: js,
          title: 'JavaScript',
          link: 'https://javascript.com/'
        },
        {
          image: laravel,
          title: 'Laravel',
          link: 'https://laravel.com/'
        },
      ],
      startDate: 'Jan, 01 2020',
      endDate: 'Feb, 06 2022',
      jobDesc: [
        'Develop numerous features, such as forum page, blog page, google adsense integration, and many more internal features using NuxtJS',
        'Build Content Management System (CMS) for onlist.id using VueJS',
        'Handle process of increasing the ranking and visibility of Onlist Website (SEO)',
        'Implementing best practices and website performance seen from google search console. Managed to increase performance around 90%'
      ]
    }
  ]
  
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='h-screen flex relative overflow-hidden text-left flex-col md:flex-row max-w-full px-7 sm:px-10 pt-[130px] justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[15px] text-2xl'>Experience</h3>
      
      <div className='w-full flex space-x-3 sm:space-x-5 overflow-x-scroll snap-x snap-mandatory pb-5'>
        {
          experienceList.map((exp:any, index: number) => {
            return (
              <ExperienceCard key={index} expData={exp} />
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default WorkExperience