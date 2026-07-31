import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'CareerLink - Placement Portal',
    description: 'An enterprise-level full-stack backend application that simplifies the placement process. It features secure JWT authentication, role-based authorization, resume parsing, cloud storage, and intuitive dashboards for students, recruiters, and admins.',
    tech: ['Java 21', 'Spring Boot 3.4', 'JWT', 'MySQL', 'AWS S3', 'React'],
    github: '#',
    demo: '#',
    images: [
      '/careerlink-admin.png',
      '/careerlink-student.png',
      '/careerlink-company.png'
    ]
  }
];

const ProjectGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative rounded-xl overflow-hidden border border-white/10 glass-card aspect-video group cursor-pointer shadow-lg bg-[#030712]">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
        <div className="w-full h-full scale-[1.12] -translate-y-[6%]">
          <img 
            src={images[0]} 
            alt="Dashboard Screenshot" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Dashboard" }}
          />
        </div>
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1).map((img, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden border border-white/10 glass-card aspect-video group cursor-pointer shadow-md bg-[#030712]">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <div className="w-full h-full scale-[1.12] -translate-y-[6%]">
                <img 
                  src={img} 
                  alt={`Screenshot ${idx + 2}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x225?text=Screenshot" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-12 text-center text-white">
            <span className="text-primary">03.</span> Featured Projects
          </h2>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.title} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}>
                
                <div className="w-full md:w-3/5 relative cursor-pointer">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg transition-all duration-300"></div>
                  <ProjectGallery images={project.images} />
                </div>

                <div className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                  <p className="text-accent font-mono mb-2">Featured Project</p>
                  <h3 className="text-3xl font-bold font-poppins mb-6 text-white">{project.title}</h3>
                  
                  <div className="glass-card p-6 mb-6 z-10 w-full md:w-[110%] md:-ml-[5%] shadow-xl">
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 mb-8 text-gray-400 font-mono text-sm ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {project.tech.map(tech => (
                      <li key={tech} className="px-3 py-1 bg-white/5 rounded-full">{tech}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4 text-gray-300">
                    <a href={project.github} className="hover:text-primary transition-colors">
                      <Github size={24} />
                    </a>
                    <a href={project.demo} className="hover:text-primary transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
