import React from 'react';
import { motion } from 'framer-motion';

const GithubStats = () => {
  // Normally, we'd fetch from GitHub API here. For now, we use a sleek image generator for the stats.
  const username = "vanapallijaswanth2005";

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-12 text-center text-white">
            <span className="text-primary">06.</span> GitHub Contributions
          </h2>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <div className="glass-card p-4 overflow-x-auto custom-scrollbar flex justify-center">
              <img 
                src={`https://ghchart.rshah.org/2563EB/${username}`} 
                alt={`${username}'s Github chart`} 
                className="w-full max-w-3xl opacity-90 hover:opacity-100 transition-opacity invert hue-rotate-[200deg] contrast-125"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 flex justify-center">
                <img 
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=react&hide_border=true&bg_color=030712&title_color=2563EB&icon_color=06B6D4&text_color=9CA3AF`} 
                  alt="GitHub Stats" 
                  className="w-full"
                />
              </div>
              <div className="glass-card p-6 flex justify-center">
                <img 
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=react&hide_border=true&bg_color=030712&title_color=2563EB&text_color=9CA3AF`} 
                  alt="Top Languages" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
