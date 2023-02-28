import Head from 'next/head'
import Header from '@/components/layouts/Header'
import Hero from '@/components/layouts/Hero'
import About from '@/components/layouts/About'
import WorkExperience from '@/components/layouts/WorkExperience'
import Intro from '@/components/layouts/Intro'

export default function Home() {
  return (
    <div className='bg-[#191919] text-[#FEFEFE] h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Narendra Portofolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Header */}
      <Header />
      
      {/* Hero */}
      {/* <section id='hero' className='snap-start'>
        <Hero />
      </section> */}
      <section id='intro'>
        <Intro />
      </section>
      
      {/* About */}
      <section id='about'>
        <About />
      </section>
      
      {/* Experience */}
      {/* <section id='experience' className='snap-center'>
        <WorkExperience />
      </section> */}
      
      {/* Skills */}
      
      {/* Projects */}
      
      {/* Contact */}
    </div>
  )
}
