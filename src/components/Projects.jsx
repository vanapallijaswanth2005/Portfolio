import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, Briefcase, ShoppingCart, User } from 'lucide-react';

const projects = [
  {
    title: 'CareerLink - Placement Portal',
    description: 'An enterprise-level full-stack backend application that simplifies the placement process. It features secure JWT authentication, role-based authorization, and intuitive dashboards.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'AWS'],
    github: '#',
    demo: '#',
    icon: Briefcase
  },
  {
    title: 'E-Commerce Website',
    description: 'A responsive e-commerce platform with product filtering, cart, and secure checkout functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    icon: ShoppingCart
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills, projects, and experience.',
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    icon: User
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-gray-50/50 dark:bg-[#030712]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
                Featured Projects
              </h2>
            </div>
            <a href="#" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View All Projects <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="flex flex-col h-full bg-white dark:bg-[#030712] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] transition-all group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div className="flex flex-col mt-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 text-[11px] uppercase tracking-wider rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800/60 flex justify-between items-center">
                    <a href={project.demo} target={project.demo !== '#' ? "_blank" : undefined} rel={project.demo !== '#' ? "noopener noreferrer" : undefined} className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      View Project <ArrowRight size={16} />
                    </a>
                    <a href={project.github} target={project.github !== '#' ? "_blank" : undefined} rel={project.github !== '#' ? "noopener noreferrer" : undefined} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
