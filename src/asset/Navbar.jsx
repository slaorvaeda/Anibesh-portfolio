'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '../../public/css/navbar.css';

function Navbar({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`navbar ${className} w-full m-auto fixed top-0 left-0 z-[1000] bg-black/85 text-white flex items-center justify-between px-4 py-4 shadow-lg`}> 
      <div className="flex items-center w-full justify-between">
        <div className="nm text-2xl  ">
          Anibesh
        </div>
        <button className="md:hidden flex flex-col gap-1 justify-center items-center w-10 h-10 ml-auto z-20" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300  ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300  ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      <div className={`flex-col gap-2 md:flex-row md:flex md:static absolute left-0 top-full w-full md:w-auto bg-black/95 md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`}> 
        <Link href="/" className="navbar-link px-6 py-3 md:py-0 md:px-4 text-white hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link href="/about" className="navbar-link px-6 py-3 md:py-0 md:px-4 text-white hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/services" className="navbar-link px-6 py-3 md:py-0 md:px-4 text-white hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/contact" className="navbar-link px-6 py-3 md:py-0 md:px-4 text-white hover:text-gray-300 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;