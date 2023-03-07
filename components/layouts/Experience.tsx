import React from 'react'
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import onlist from '../../public/images/onlist.jpeg'
import glovory from '../../public/images/glovory.jpeg'

import { BiBriefcase } from 'react-icons/bi'


const Experience = () => {
  const renderTimeline = () => {
    return (
      <VerticalTimeline className=''>
        <VerticalTimelineElement
          className=""
          contentStyle={{
            background: 'linear-gradient(45deg, rgba(200,75,49,1) 0%, rgba(200,75,49,1) 50%, rgba(236,219,186,1) 100%)',
            color: '#FFF',
            padding: '1rem'
          }}
          contentArrowStyle={{ borderRight: '7px solid #ECDBBA' }}
          date="2021 - present"
          dateClassName='text-[#FFF] lg:ml-2'
          iconStyle={{ background: '#C84B31', color: '#ECDBBA'}}
          icon={
            <Image
              className='rounded-full object-cover object-center'
              src={glovory}
              alt='about-image'
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">Intermediate Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">PT Glovory Technologies Indonesia</h4>
          <p>
            Tools used: NextJS, ReactJS, Redux, TypeScript, SCSS, Ant Design.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          contentStyle={{
            background: 'linear-gradient(45deg, rgba(200,75,49,1) 0%, rgba(200,75,49,1) 50%, rgba(236,219,186,1) 100%)',
            color: '#FFF',
            padding: '1rem'
          }}
          contentArrowStyle={{ borderRight: '7px solid #C84B31' }}
          date="2019 - 2021"
          dateClassName='text-[#FFF] lg:mr-2'
          iconStyle={{ background: '#ECDBBA', color: '#C84B31' }}
          icon={
            <Image
              className='rounded-full object-cover object-center'
              src={onlist}
              alt='about-image'
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">PT Berkat Bejana Anugerah<br />(Onlist.id)</h4>
          <p>
            Tools used: NuxtJS, VueJS, Vuex, JavaScript, SCSS, HTML, Laravel, JQuery, PHP.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{
            background: 'linear-gradient(45deg, rgba(200,75,49,1) 0%, rgba(200,75,49,1) 50%, rgba(236,219,186,1) 100%)',
            color: '#FFF'
          }}
          icon={<BiBriefcase />}
        />
      </VerticalTimeline>
    )
  }
  
  return (
    <div className='section md:pt-[90px] pt-[70px] px-5 xl:mx-auto mx-5 max-w-7xl bg-[#191919] transition-all duration-300 overflow-hidden'>
      <div className="md:min-h-[calc(100vh-90px)] min-h-[calc(100vh-58px)] max-w-4xl mx-auto">
        <h3 className='uppercase tracking-[15px] relative left-[15px] md:text-2xl text-xl text-center'>Experience</h3>
        <div className="flex justify-center mt-10 lg:pb-20 pb-16">
          { renderTimeline() }
        </div>
      </div>
    </div>
  )
}

export default Experience