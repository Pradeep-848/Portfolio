import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between h-15 w-3/5 px-8 mx-auto mt-4 mb-1 bg-gray-800 opacity-90 text-white rounded-full sticky top-3 z-50 transition-all duration-300 ease-in-out">
      <h3 className="text-lg font-semibold">PORTFOLIO</h3>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-4">
        <Link
          to="/"
          className="mx-4 text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 hover:animate-pulse group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/skills"
          className="mx-4 text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 hover:animate-pulse group"
        >
          Skills
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/tools"
          className="mx-4 text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 hover:animate-pulse group"
        >
          Tools
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/projects"
          className="mx-4 text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 hover:animate-pulse group"
        >
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/experience"
          className="mx-4 text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 hover:animate-pulse group"
        >
          Experience
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/contacts"
          className="mx-4 text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 hover:animate-pulse group"
        >
          Contacts
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </nav>

      {/* Mobile Navigation Overlay */}
      <nav
        ref={navRef}
        className={`lg:hidden fixed inset-0 bg-gray-800 flex flex-col items-center justify-center gap-6 transition-transform duration-1000 z-40 ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <Link
          to="/"
          onClick={showNavbar}
          className="text-2xl text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 active:text-blue-400 active:animate-pulse group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/skills"
          onClick={showNavbar}
          className="text-2xl text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 active:text-blue-400 active:animate-pulse group"
        >
          Skills
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/tools"
          onClick={showNavbar}
          className="text-2xl text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 active:text-blue-400 active:animate-pulse group"
        >
          Tools
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/projects"
          onClick={showNavbar}
          className="text-2xl text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 active:text-blue-400 active:animate-pulse group"
        >
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/experience"
          onClick={showNavbar}
          className="text-2xl text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 active:text-blue-400 active:animate-pulse group"
        >
          Experience
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="/contacts"
          onClick={showNavbar}
          className="text-2xl text-white no-underline relative transition-all duration-300 ease-in-out hover:text-blue-400 active:text-blue-400 active:animate-pulse group"
        >
          Contacts
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        {/* Close button for mobile */}
        <button
          className="absolute top-8 right-8 p-2 cursor-pointer bg-transparent border-none outline-none text-white text-3xl"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden p-2 cursor-pointer bg-transparent border-none outline-none text-white text-3xl"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;