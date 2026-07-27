import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { Download, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Java Full Stack Developer',
        'Backend Engineer',
        'Spring Boot Enthusiast',
        'Problem Solver'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1500,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium tracking-wide mb-4">👋 Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              VANAPALLI JASWANTH
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 h-10">
            <span ref={el}></span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-12">
            <span className="px-4 py-2 glass-card">Java</span>
            <span className="px-4 py-2 glass-card">Spring Boot</span>
            <span className="px-4 py-2 glass-card">REST APIs</span>
            <span className="px-4 py-2 glass-card">DSA</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/resume.pdf" download className="px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Download size={20} />
              Download Resume
            </a>
            <Link to="projects" smooth={true} duration={500} className="px-8 py-4 glass-card text-white rounded-full font-medium cursor-pointer hover:bg-white/10 transition-colors">
              View Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 cursor-pointer"
        >
          <Link to="about" smooth={true} duration={500} className="flex flex-col items-center hover:text-accent transition-colors">
            <span className="text-sm uppercase tracking-widest mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
