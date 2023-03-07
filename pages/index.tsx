import Head from 'next/head'
import Navigation from '@/components/layouts/Navigation'
import Header from '@/components/layouts/Header'
import Hero from '@/components/layouts/Hero'
import About from '@/components/layouts/About'
import WorkExperience from '@/components/layouts/WorkExperience'
import Intro from '@/components/layouts/Intro'
import Experience from '@/components/layouts/Experience'

export default function Home() {
  return (
    <div className='bg-[#191919] text-[#FEFEFE] z-0 pt-[60px] lg:pt-[90px]'>
      <Head>
        <title>Narendra Portofolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Header */}
      <Header />
      
      {/* Hero */}
      {/* <section id='hero' className='snap-start'>
        <Hero />
      </section> */}
      <section id='home'>
        <Intro />
      </section>
      
      {/* About */}
      <section id='about'>
        <About />
      </section>
      
      {/* Experience */}
      <section id='experience'>
        {/* <WorkExperience /> */}
        <Experience />
      </section>
      
      {/* Skills */}
      
      {/* Projects */}
      
      {/* Contact */}
    </div>
  )
}
