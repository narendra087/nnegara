import Head from 'next/head'
import Navigation from '@/components/layouts/Navigation'
import Header from '@/components/layouts/Header'
import About from '@/components/layouts/About'
import Intro from '@/components/layouts/Intro'
import Experience from '@/components/layouts/Experience'
import Project from '@/components/layouts/Project'

export default function Home() {
  return (
    <div className='bg-[#191919] text-[#FEFEFE] z-0 pt-[60px] lg:pt-[90px]'>
      <Head>
        <title>Narendra Portofolio</title>
      </Head>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Header */}
      <Header />
      
      {/* Home */}
      <section id='home'>
        <Intro />
      </section>
      
      {/* About */}
      <section id='about'>
        <About />
      </section>
      
      {/* Experience */}
      <section id='experience'>
        <Experience />
      </section>
      
      {/* Projects */}
      <section id='project'>
        <Project />
      </section>
      
      {/* Contact */}
    </div>
  )
}
