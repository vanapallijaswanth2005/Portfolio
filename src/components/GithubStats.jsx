import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Star, Users, BookOpen } from 'lucide-react';

const GithubStats = () => {
  const username = "vanapallijaswanth2005";
  const [stats, setStats] = useState({ repos: 0, followers: 0, following: 0 });
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats({
            repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following
          });
        }

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          const langMap = {};
          reposData.forEach(repo => {
            if (repo.language) {
              langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            }
          });
          
          const sortedLangs = Object.entries(langMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([name, count]) => ({
              name,
              percent: Math.round((count / Object.keys(langMap).length) * 100)
            }));
            
          // If no languages, add some defaults based on skills
          if (sortedLangs.length === 0) {
             setLanguages([
               { name: 'Java', percent: 65 },
               { name: 'JavaScript', percent: 25 },
               { name: 'HTML/CSS', percent: 10 }
             ]);
          } else {
             setLanguages(sortedLangs);
          }
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section className="py-20 relative">
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
                className="w-full max-w-3xl opacity-90 hover:opacity-100 transition-opacity invert hue-rotate-[200deg] contrast-125 min-w-[700px]"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Custom Stats Card */}
              <div className="glass-card p-6 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <GithubIcon /> {username}'s Stats
                </h3>
                
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <StatItem icon={<BookOpen size={20} className="text-primary" />} label="Public Repos" value={stats.repos} />
                    <StatItem icon={<Users size={20} className="text-accent" />} label="Followers" value={stats.followers} />
                    <StatItem icon={<Star size={20} className="text-yellow-400" />} label="Following" value={stats.following} />
                    <StatItem icon={<GitPullRequest size={20} className="text-purple-400" />} label="Contributions" value="Active" />
                  </div>
                )}
              </div>

              {/* Custom Languages Card */}
              <div className="glass-card p-6 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  Most Used Languages
                </h3>
                
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {languages.map((lang, idx) => (
                      <div key={lang.name} className="flex flex-col gap-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300 font-medium">{lang.name}</span>
                          <span className="text-gray-400">{lang.percent}%</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${lang.percent}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const StatItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
    {icon}
    <div className="flex flex-col">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-white font-bold">{value}</span>
    </div>
  </div>
);

export default GithubStats;
