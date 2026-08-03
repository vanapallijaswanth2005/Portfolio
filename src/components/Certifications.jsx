import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificationsData = [
  {
    title: "JavaScript",
    issuer: "CodeChef",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQDVr_2LmRsrS4D5d6wqB0IoASlpu4wfmH79cxSwDRn-HQA?e=zgVang"
  },
  {
    title: "CSS",
    issuer: "CodeChef",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQAOgblEccTRSKL9Vn-LLw1zAbVDvK70Zvqh1SYujN86Gv0?e=2eohNm"
  },
  {
    title: "HTML",
    issuer: "CodeChef",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQADCR_vWU09QIiFx35p4MxlAeH-9QtazmpXVyfhr6Ppvdg?e=DmngBR"
  },
  {
    title: "Projects Using HTML, CSS",
    issuer: "CodeChef",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQADCR_vWU09QIiFx35p4MxlAeH-9QtazmpXVyfhr6Ppvdg?e=DmngBR"
  },
  {
    title: "Java",
    issuer: "CodeChef",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQBzjMz3T9feSrM8RamSaBysARqct_q9_BYQ-AlzUyppM0I?e=MiNzfo"
  },
  {
    title: "SQL",
    issuer: "CodeChef",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQBp5T9bCAa2TYnxJDtRGpX3AT6AampHcZAjPqsqSgfO270?e=GKHrhX"
  },
  {
    title: "Web Development using JavaScript",
    issuer: "CodeChef",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQA8LUdJZXKISbBIJrxwe66nAfKMIuzNXj5BIqNKMEjjv-I?e=SZU6uS"
  },
  {
    title: "Java Full Stack Virtual Internship",
    issuer: "AICTE / Eduskills",
    year: "2026",
    link: "https://1drv.ms/b/c/abe6797fff953934/IQCtLgtyutv6S4dA2L1KqJ-4ASlfxf-D14ts2Jxt46gyaCY?e=ma8qP8"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-12 text-center text-gray-900 dark:text-white">
            <span className="text-primary">05.</span> Certifications
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {certificationsData.map((cert, index) => (
              <div key={index} className="glass-card-hover p-8 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/40"></div>
                
                <div className="flex items-center gap-6 z-10 w-full md:w-auto">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <Award size={32} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Issued by <span className="text-primary font-medium">{cert.issuer}</span> &bull; {cert.year}</p>
                  </div>
                </div>

                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-gray-900 dark:text-white transition-colors flex items-center justify-center gap-2 z-10 w-full md:w-auto shrink-0">
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
