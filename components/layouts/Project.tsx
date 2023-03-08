import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import bg from '../../public/images/project-bg.png'
import Onlist01 from '../../public/images/project-onlist-01.png'
import Onlist02 from '../../public/images/project-onlist-02.png'
import Tracer from '../../public/images/project-tracer.png'
import NersCov from '../../public/images/project-ners.png'
import Cilacs from '../../public/images/project-cilacs.png'

const Project = () => {
  const [showHidden, setShow] = useState(false)
  
  const projectCard = (image: any, job: String, title: String, desc: String = '', hidden: Boolean = false, comingSoon: Boolean = false) => {
    return (
      <div className={`group relative overflow-hidden border-2 border-white/50 rounded-xl ${hidden && !showHidden ? 'hidden' : ''}`}>
        <div className="overlay group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        <Image src={image} alt={`project-${title}`} className='group-hover:scale-125 transition-all duration-500' />
        <div
          className={`
            absolute -bottom-full transition-all duration-500 z-50
            ${comingSoon ? 'left-1/2 -translate-x-1/2 group-hover:bottom-10' : 'left-4 group-hover:bottom-24'}
          `}
        >
          <span
            className={`
              text-xl font-bold text-gradient
              ${comingSoon ? 'text-3xl' : 'text-xl'}
            `}
          >
            { job }
          </span>
        </div>
        <div className="absolute -bottom-full left-4 group-hover:bottom-14 group-hover:lg:bottom-14 transition-all duration-700 z-50">
          <span className='text-3xl text-white'>{ title }</span>
        </div>
        <div className="absolute -bottom-full left-4 group-hover:bottom-6 group-hover:lg:bottom-2 transition-all duration-700 z-50 max-w-sm">
          <p>{ desc }</p>
        </div>
        {
          comingSoon &&
          <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl uppercase text-center'>Coming<br />Soon</p>
        }
      </div>
    )
  }
  
  return (
    <div className='section md:py-[90px] py-[70px] px-5 xl:mx-auto mx-5 max-w-7xl bg-[#191919] transition-all duration-300 overflow-hidden'>
      <div className="md:min-h-[calc(100vh-90px)] min-h-[calc(100vh-58px)] max-w-4xl mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div className='flex-1 flex flex-col'>
              <h3 className='text-gradient uppercase font-bold text-3xl leading-tight mb-5'>My latest<br /> Work</h3>
              <p className='max-w-sm mb-16'>
                This is my latest work including individual project and professional project.
                There are still ongoing project, You can show the hidden project by clicking the button below.
              </p>
              <button className={`btn w-fit ${showHidden ? 'btn-secondary' : 'btn-primary'}`} onClick={() => setShow(!showHidden)}>{showHidden ? 'Hide ongoing projects' : 'Show ongoing projects'}</button>
            </div>
            { projectCard(Onlist01, 'Frontend Developer', 'OnList', 'An online marketplace for selling and renting residence.') }
            { projectCard(Onlist02, 'Frontend Developer', 'OnList CMS', 'Content Management System (CMS) for OnList Website') }
            { projectCard(bg, 'Stay tune!', '', '', true, true) }
          </div>
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            { projectCard(Tracer, 'Fullstack Developer', 'Tracer Study ITS', 'An online survey for Institut Teknologi Sepuluh Nopember Alumni.') }
            { projectCard(NersCov, 'Fullstack Developer', 'NersCov', 'An online screening Covid-19 assessment in Surabaya.') }
            { projectCard(Cilacs, 'Frontend Developer', 'Cilacs UII', 'An online test center and course registration from Cilacs UII.') }
            { projectCard(bg, 'Stay tune!', '', '', true, true) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project