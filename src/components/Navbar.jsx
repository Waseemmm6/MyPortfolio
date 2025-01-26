import React from 'react'
import logo from '../assets/wasemLogo.png'

import {FaLinkedin} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
    <img className='mx-2 w-10' src={logo} alt='logo' />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
   {/* LinkedIn */}
   <a
        href="https://www.linkedin.com/in/mallah-waseem-5339b5251/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition-colors duration-200"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Waseemmm6"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition-colors duration-200"
      >
        <FaGithub />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/waseemm787/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition-colors duration-200"
      >
        <FaInstagram />
      </a>
    </div>
    
    </nav>
  )
}

export default Navbar