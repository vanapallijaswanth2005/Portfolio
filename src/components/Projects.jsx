import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Student Placement Portal',
    description: 'An enterprise-level full-stack backend application that simplifies the placement process. It features secure JWT authentication, role-based authorization, resume parsing, and cloud storage.',
    tech: ['Java 21', 'Spring Boot 3.4', 'JWT', 'MySQL', 'AWS S3'],
    github: '#',
    demo: '#',
    image: '/project_mockup.png'
  },
  {
    title: 'Employee Management System',
    description: 'A robust Spring Boot application for managing employee records, payroll, and attendance with advanced reporting capabilities and RESTful integration.',
    tech: ['Spring Boot', 'Hibernate', 'MySQL', 'React'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'E-Commerce REST API',
    description: 'Scalable backend API for an e-commerce platform featuring product catalog, shopping cart, order processing, and payment gateway integration.',
    tech: ['Java', 'Spring Security', 'PostgreSQL', 'Redis'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop'
  }
];

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
                
                <div className="w-full md:w-3/5 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/40 transition-all duration-300"></div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 glass-card">
                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform" onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Project" }} />
                  </div>
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
