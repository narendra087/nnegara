import Head from 'next/head'
import Header from '@/components/layouts/Header'
import Hero from '@/components/layouts/Hero'
import About from '@/components/layouts/About'

export default function Home() {
  return (
    <div className='bg-[#2C3333] text-[#E7F6F2] h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Narendra Portofolio</title>
      </Head>
      
      {/* Header */}
      <Header />
      
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      
      {/* Experience */}
      
      {/* Skills */}
      
      {/* Projects */}
      
      {/* Contact */}
    </div>
  )
}
