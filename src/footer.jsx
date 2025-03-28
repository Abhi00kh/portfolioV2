
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black">
      {/* Background grid effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -70 - 30],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Contact message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Let's Connect and Build Something Great
            </h2>
            <p className="text-gray-300 text-lg">
              If you're interested in collaborating or have any questions, feel free to reach out. 
              I'm always open to new opportunities and passionate about building impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:abhijitkhule0@gmail.com" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
              >
                <FaEnvelope /> Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/abhijit-khule/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <FaLinkedin /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>
          
          {/* Right side: Quick links and email signup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for latest projects, articles and tech updates.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="youremail@example.com" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg placeholder:text-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Social links and copyright */}
        <div className="mt-20 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-x-6 mb-4 md:mb-0">
              <a 
                href="https://linkedin.com/in/abhijit-khule" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://github.com/Abhi00kh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="mailto:abhijitkhule0@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Abhijit Khule. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;