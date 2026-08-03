import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', level: 70 },
  { name: 'Spring Boot', level: 67 },
  { name: 'MySQL', level: 65 },
  { name: 'JavaScript', level: 66 },
  { name: 'REST APIs', level: 69 },
  { name: 'HTML & CSS', level: 68 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-12 text-center text-gray-900 dark:text-white">
            <span className="text-primary">02.</span> My Skills
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium font-poppins text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
