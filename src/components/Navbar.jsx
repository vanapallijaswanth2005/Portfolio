import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer text-primary">
          <Code2 size={32} className="text-accent" />
          <span className="text-2xl font-bold font-poppins text-white tracking-wide">Jaswanth<span className="text-primary">.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-accent"
              className="text-gray-300 hover:text-white cursor-pointer font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="#resume" className="px-5 py-2 bg-primary/20 text-primary border border-primary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-300 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030712]/95 backdrop-blur-lg border-b border-white/10 py-6 flex flex-col items-center gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white cursor-pointer font-medium text-lg"
            >
              {link.name}
            </Link>
          ))}
          <a href="#resume" className="px-6 py-2 bg-primary text-white rounded-full font-medium">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
