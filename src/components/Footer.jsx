import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiCodechef, SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/10 py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-poppins mb-2">Vanapalli Jaswanth</h2>
          <p className="text-gray-400">Aspiring Full Stack Developer</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/vanapallijaswanth2005" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jaswanth-vanapalli-911111400/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/Jaswanth_Vanapalli/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ffa116] transition-colors">
            <SiLeetcode size={24} />
          </a>
          <a href="https://www.codechef.com/users/jaswanthjassu" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <SiCodechef size={24} />
          </a>
          <a href="mailto:vanapallijaswanth2005@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Vanapalli Jaswanth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
