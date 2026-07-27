import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-12 text-center text-white">
            <span className="text-primary">05.</span> Certifications
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card-hover p-8 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group rounded-2xl bg-white/5 backdrop-blur-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/40"></div>
              
              <div className="flex items-center gap-6 z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <Award size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Learn JavaScript</h3>
                  <p className="text-gray-400">Issued by <span className="text-primary font-medium">CodeChef</span> &bull; 2026</p>
                </div>
              </div>

              <a href="#" className="px-6 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors flex items-center gap-2 z-10">
                View Certificate <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
