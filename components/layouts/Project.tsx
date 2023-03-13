import React from 'react'
import Image from 'next/image'

import bg from '../../public/images/project-bg.png'
import Onlist01 from '../../public/images/project-onlist-01.png'
import Onlist02 from '../../public/images/project-onlist-02.png'
import Tracer from '../../public/images/project-tracer.png'
import NersCov from '../../public/images/project-ners.png'
import Cilacs from '../../public/images/project-cilacs.png'

const Project = () => {
  const projectCard = (
    image: any,
    job: String,
    title: String,
    desc: String = '',
    comingSoon: Boolean = false,
    onlyDesktop: Boolean = false,
    onlyMobile: Boolean = false
  ) => {
    return (
      <div
        className={`group relative overflow-hidden border-2 border-white/50 rounded-xl
          ${onlyDesktop ? 'lg:block hidden' : ''} ${onlyMobile ? 'lg:hidden block' : ''}
        `}
      >
        <div className="overlay group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        <Image src={image} alt={`project-${title}`} className='group-hover:scale-125 transition-all duration-500' />
        <div
          className={`absolute -bottom-full transition-all duration-500 z-50
            ${comingSoon ? 'left-1/2 -translate-x-1/2 group-hover:lg:bottom-10 group-hover:bottom-4' : 'left-4 group-hover:bottom-24'}
          `}
        >
          <span
            className={`font-bold text-gradient
              ${comingSoon ? 'text-2xl' : 'text-xl'}
            `}
          >
            { job }
          </span>
        </div>
        <div className="absolute -bottom-full left-4 group-hover:bottom-[60px] group-hover:lg:bottom-14 transition-all duration-700 z-50">
          <span className='md:text-3xl text-2xl text-white'>{ title }</span>
        </div>
        <div className="absolute -bottom-full left-4 group-hover:bottom-4 group-hover:lg:bottom-2 transition-all duration-700 z-50 max-w-sm">
          <p className='md:text-base text-sm'>{ desc }</p>
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
              <p className='max-w-sm mb-9'>
                This is my latest work including individual project and professional project.
                I&apos;m open to become a freelancer or be one of your developer team, if you are interested in hiring me, click the button below.
              </p>
              <a target="_blank" rel="noreferrer" href='https://t.me/narendranegara'>
                <button className={`btn w-fit btn-primary`}>Hire Me</button>
              </a>
            </div>
            { projectCard(Onlist01, 'Frontend Developer', 'OnList', 'An online marketplace for selling and renting residence.') }
            { projectCard(Onlist02, 'Frontend Developer', 'OnList CMS', 'Content Management System (CMS) for OnList Website') }
            { projectCard(bg, 'Stay tune!', '', '', true, true) }
          </div>
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            { projectCard(Tracer, 'Fullstack Developer', 'Tracer Study ITS', 'An online survey for Institut Teknologi Sepuluh Nopember Alumni.') }
            { projectCard(NersCov, 'Fullstack Developer', 'NersCov', 'An online screening Covid-19 assessment in Surabaya.') }
            { projectCard(Cilacs, 'Frontend Developer', 'Cilacs UII', 'An online test center and course registration from Cilacs UII.') }
            { projectCard(bg, 'Stay tune!', '', '', true) }
            { projectCard(bg, 'Stay tune!', '', '', true, false, true) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project