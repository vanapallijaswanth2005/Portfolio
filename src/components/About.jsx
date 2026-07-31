import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-12 text-center text-white">
            <span className="text-primary">01.</span> About Me
          </h2>

          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/40 shrink-0 shadow-[0_0_40px_rgba(37,99,235,0.4)] relative group"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 rounded-full z-10 pointer-events-none"></div>
              <img src="/avatar.png" alt="Vanapalli Jaswanth" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Profile" }} />
            </motion.div>
            
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Hello! I'm <span className="text-white font-medium">Vanapalli Jaswanth</span>, an aspiring Full Stack Developer with a strong foundation in Java, Spring Boot, and Data Structures & Algorithms. 
              </p>
              <p>
                I am passionate about building scalable, secure, and user-centric applications. Currently, I am enhancing my expertise in backend development while expanding into full-stack technologies. 
              </p>
              <p>
                I enjoy solving challenging programming problems, designing robust systems, and continuously learning modern software engineering practices to deliver high-quality solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
