import { useState, useEffect, useRef, memo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { HiCode, HiOutlineDesktopComputer, HiOutlineTerminal } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import Resume from './assets/Resume..pdf';

// Pre-define motion variants outside the component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// Memoize static components
const CodeEditor = memo(() => (
  <div className="absolute inset-0 backdrop-blur-sm rounded-2xl border border-[#f472b6]/20 bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/80 shadow-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
    <div className="flex flex-col h-full will-change-transform">
      {/* Code editor header */}
      <div className="bg-[#0f172a] px-4 py-3 flex items-center border-b border-[#f472b6]/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#f43f5e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#facc15]"></div>
          <div className="w-3 h-3 rounded-full bg-[#4ade80]"></div>
        </div>
        <div className="ml-4 text-xs text-[#f472b6]/60 font-mono">portfolio.jsx</div>
      </div>
      
      {/* Code editor content - simplified for better performance */}
      <div className="p-4 font-mono text-xs sm:text-sm overflow-hidden flex-1 text-[#38bdf8]">
        <div className="text-[#f472b6]">import</div>
        <div className="ml-4">{'{'} <span className="text-[#facc15]">Developer</span> {'}'} <span className="text-[#f472b6]">from</span> <span className="text-[#4ade80]">'./abhijit'</span>;</div>
        <div className="mt-2 text-[#f472b6]">const</div>
        <div className="ml-4"><span className="text-[#38bdf8]">skills</span> = [</div>
        <div className="ml-8 text-[#4ade80]">'React', 'Node.js',</div>
        <div className="ml-8 text-[#4ade80]">'JavaScript', 'Python'</div>
        <div className="ml-4">];</div>
        <div className="mt-2 text-[#f472b6]">function</div>
        <div className="ml-4"><span className="text-[#facc15]">Portfolio</span>() {'{'}
          <div className="ml-4 text-[#f472b6]">return</div>
          <div className="ml-8"><span className="text-[#f472b6]">{'<'}</span><span className="text-[#facc15]">Developer</span></div>
          <div className="ml-12"><span className="text-[#38bdf8]">name</span><span className="text-[#f472b6]">=</span><span className="text-[#4ade80]">"Abhijit Khule"</span></div>
          <div className="ml-8"><span className="text-[#f472b6]">/{'>'}</span></div>
          <div className="ml-4">);
          </div>
        </div>
        <div>{'}'}
        </div>
      </div>
    </div>
  </div>
));

// Static social links component
const SocialLinks = memo(({ links }) => (
  <div className="flex gap-4 justify-center lg:justify-start">
    {links.map((social) => (
      <a 
        key={social.label}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full text-[#cbd5e1] ${social.color} transition-colors duration-300 bg-[#1e293b]/70 border border-[#f472b6]/20 relative group`}
        aria-label={social.label}
      >
        <social.icon size={20} />
        <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-[#0f172a] text-[#f8fafc] text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 border border-[#f472b6]/20">
          {social.label}
        </span>
      </a>
    ))}
  </div>
));

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Typing animation effect
  const titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Typing effect - optimized with useRef for timeouts
  const timeoutRef = useRef(null);
  
  useEffect(() => {
    const currentTitle = titles[activeIndex];
    
    if (!isDeleting && displayText === currentTitle) {
      // Pause at the end of typing
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
      return;
    }
    
    if (isDeleting && displayText === '') {
      // Move to next title after deletion
      setIsDeleting(false);
      setActiveIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setTypingSpeed(150);
      return;
    }
    
    timeoutRef.current = setTimeout(() => {
      if (isDeleting) {
        // Delete character
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        // Add character
        setDisplayText(prev => currentTitle.slice(0, prev.length + 1));
      }
    }, typingSpeed);
    
    // Clean up timeout to prevent memory leaks
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, activeIndex, titles, typingSpeed]);
  
  // Social media links with updated colors
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/Abhi00kh', color: 'hover:text-white hover:bg-[#2a2a2a]' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/abhijit-khule', color: 'hover:text-white hover:bg-[#0077b5]' },
    { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com/AbhijitKhule', color: 'hover:text-white hover:bg-[#1da1f2]' },
    { icon: FaEnvelope, label: 'Email', url: 'mailto:abhijitkhule0@gmail.com', color: 'hover:text-white hover:bg-[#ea4335]' }
  ];
  
  // Floating tech elements - decorative (reduced number)
  const techElements = [
    { icon: HiCode, label: 'React', color: '#38bdf8' },
    { icon: HiOutlineDesktopComputer, label: 'Node.js', color: '#4ade80' },
    { icon: HiOutlineTerminal, label: 'MongoDB', color: '#f472b6' }
  ];
  
  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] py-20 lg:py-0"
    >
      {/* Static background with reduced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simpler, static background elements */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#38bdf8] rounded-full opacity-5"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-[#f472b6] rounded-full opacity-5"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#4ade80] rounded-full opacity-5"></div>
        
        {/* Simplified grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      {/* Main content with explicit height and width to prevent layout shifts */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="lg:col-span-3 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            ref={ref}
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-[#0f172a] text-[#f472b6] border border-[#f472b6]/20">
                Hello there, I'm
              </span>
            </motion.div>
            
            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#38bdf8] to-[#f472b6]">
                Abhijit Khule
              </span>
            </motion.h1>
            
            {/* Title with typing effect - fixed height to prevent layout shifts */}
            <motion.div variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-medium h-14 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#f472b6]">{displayText}</span>
              <span className="inline-block w-[3px] h-[1em] bg-[#f472b6] ml-1 align-middle opacity-100 animate-[blink_1s_step-end_infinite]"></span>
            </motion.div>
            
            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#cbd5e1] mb-8 max-w-2xl mx-auto lg:mx-0">
              I design and build modern web applications that combine aesthetic appeal with efficient functionality. 
              My expertise spans across frontend technologies, backend development, and database management.
            </motion.p>
            
            {/* Action buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a 
                href={Resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#f472b6] to-[#38bdf8] text-white font-semibold relative overflow-hidden shadow-md"
                aria-label="View my resume"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Resume <span className="block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </a>
              
              <a 
                href="#projects" 
                className="group px-8 py-4 rounded-full bg-transparent border border-[#f472b6]/30 text-[#f472b6] font-semibold hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors duration-200 flex items-center justify-center gap-2"
                aria-label="See my work"
              >
                See My Work <FaArrowDown />
              </a>
            </motion.div>
            
            {/* Social links - memoized component to prevent rerenders */}
            <motion.div variants={itemVariants}>
              <SocialLinks links={socialLinks} />
            </motion.div>
          </motion.div>
          
          {/* Right content - Code editor with fixed dimensions to prevent layout shifts */}
          <div className="lg:col-span-2 relative h-[400px] max-w-md mx-auto w-full">
            <CodeEditor />
            
            {/* Static tech badges replacing animated ones */}
            {techElements.map((tech, index) => (
              <div
                key={tech.label}
                className="absolute bg-[#0f172a]/90 px-3 py-2 rounded-full border border-[#f472b6]/30 text-xs font-medium text-[#38bdf8] flex items-center gap-1.5 shadow-sm"
                style={{
                  top: `${25 + (index * 25)}%`,
                  left: index % 2 === 0 ? "-10%" : "80%",
                }}
              >
                <tech.icon color={tech.color} /> {tech.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - simplified, static version */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-[#f472b6] text-sm mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-[#f472b6]/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-[#f472b6] rounded-full mt-2"></div>
        </div>
      </div>
      
      {/* CSS for special animations - moved to global styles or inline CSS instead of dynamic JSX */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}