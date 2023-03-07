import React from 'react'
import { Link } from 'react-scroll'
import { BiUser, BiHomeAlt, BiBriefcase, BiEnvelope, BiArchive } from 'react-icons/bi'

const Navigation = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[50px] backdrop-blur-2xl rounded-full max-w-[320px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
          <Link smooth={true} spy={true} duration={300} offset={-100} title="Home" to='home' className="cursor-pointer flex items-center justify-center"><BiHomeAlt /></Link>
          <Link smooth={true} spy={true} duration={300} title="About" to='about' className="cursor-pointer flex items-center justify-center"><BiUser /></Link>
          <Link smooth={true} spy={true} duration={300} title="Experience" to='experience' className="cursor-pointer flex items-center justify-center"><BiBriefcase /></Link>
          <Link smooth={true} spy={true} duration={300} title="Project" to='Project' className="cursor-pointer flex items-center justify-center"><BiArchive /></Link>
          <Link smooth={true} spy={true} duration={300} title="Contact" to='contact' className="cursor-pointer flex items-center justify-center"><BiEnvelope /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation