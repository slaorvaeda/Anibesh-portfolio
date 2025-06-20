'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '../../public/css/navbar.css';
import down from '../../public/image/download.png'

function Navbar({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`navbar ${className} md:w-[70%] m-auto fixed top-[10px] md:top-10 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[1000] md:shadow-lg rounded-4xl text-white flex items-center justify-center `}>
      <div className="flex items-center w-full justify-between ">
        <div className="pa nm text-2xl bg-gray-400/45 p-10 w-auto rounded-4xl ">
          Anibesh
        </div>
        <button className="md:hidden flex flex-col gap-1 justify-center items-center w-10 h-10 ml-auto z-20" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-7 h-1 bg-orange-300 rounded transition-all duration-300  ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-yellow-100 rounded transition-all duration-300  ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-green-400 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex md:static absolute left-0 top-full w-full md:w-auto  pa-2  md:backdrop-blur-none rounded-4xl gap-2 md:bg-transparent  md:shadow-none transition-all duration-300   ${menuOpen ? 'flex' : 'hidden'}`}>
        <Link href="/" className="navbar-link px-3 py-3 md:py-1 md:px-4 text-white bg-gray-500/65 hover:text-gray-300 font-medium rounded-4xl backdrop-blur-5xl" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link href="/about" className="navbar-link px-6 py-3 md:py-1 md:px-4 text-white hover:text-gray-300 font-medium rounded-4xl bg-gray-500/65 backdrop-blur-5xl " onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/services" className="navbar-link px-6 py-3 md:py-1 md:px-4 text-white hover:text-gray-300 font-medium bg-gray-500/65 backdrop-blur-5xl rounded-4xl" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/contact" className="navbar-link px-6 py-3 md:py-1 md:px-4 text-white hover:text-gray-300 font-medium bg-gray-500/65 backdrop-blur-5xl rounded-4xl " onClick={() => setMenuOpen(false)}>Contact</Link>
        

      </div>
      {/* <div className="bg-gray-500/65 pa-2 rounded-4xl hidden md:block">{down}</div> */}
    </nav>
  );
}

export default Navbar;