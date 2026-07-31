import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2023', title: 'Started B.Tech', description: 'Enrolled in Computer Science Engineering at Raghu Engineering College.' },
  { year: '2024', title: 'Learned Java & DSA', description: 'Mastered Java basics and started solving Data Structures & Algorithms problems.' },
  { year: '2025', title: 'Built Spring Boot Projects', description: 'Transitioned to backend development, learning Spring Boot and RESTful APIs.' },
  { year: '2026', title: 'Student Placement Portal', description: 'Developed an enterprise-level full-stack backend application.' }
];

const Timeline = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-16 text-center text-white">
            <span className="text-primary">04.</span> My Journey
          </h2>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className="absolute left-[11px] md:left-1/2 w-3 h-3 bg-accent rounded-full md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
                  
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="glass-card p-6 inline-block w-full"
                    >
                      <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
