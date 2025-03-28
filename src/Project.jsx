import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  BookOpenIcon,
  FolderArrowDownIcon,
  PuzzlePieceIcon,
  NewspaperIcon,
} from '@heroicons/react/20/solid';

// You'll need to add these images to your assets folder
// For now, using placeholder images
const projectsData = [
  {
    name: 'Game Blog',
    description: 'A responsive gaming blog featuring reviews, news, and gameplay tips for the latest titles.',
    icon: NewspaperIcon,
    buttonLabel: 'Visit Blog',
    link: 'https://your-game-blog-url.com',
    featured: true,
    image: 'https://placehold.co/600x400/3b82f6/FFFFFF/png?text=Game+Blog',
  },
  {
    name: 'Web App Firewall',
    description: 'A deep learning firewall detecting web app attacks with 95% accuracy.',
    icon: ShieldCheckIcon,
    buttonLabel: 'View Project',
    link: 'https://github.com/Abhi00kh/Firewall-final',
    image: 'https://placehold.co/600x400/1e3a8a/FFFFFF/png?text=Firewall',
  },
  {
    name: 'Python Tutorial Site',
    description: 'A responsive Python tutorial site built with Vue.js for interactive learning.',
    icon: BookOpenIcon,
    buttonLabel: 'Visit Site',
    link: 'https://abhi00kh.github.io/my-python-tutorial',
    image: 'https://placehold.co/600x400/0f766e/FFFFFF/png?text=Python+Tutorial',
  },
  {
    name: 'File Categorizer',
    description: 'Python package automating file categorization with 400+ downloads.',
    icon: FolderArrowDownIcon,
    buttonLabel: 'View on GitHub',
    link: 'https://github.com/Abhi00kh/file-categorizer',
    image: 'https://placehold.co/600x400/4338ca/FFFFFF/png?text=File+Categorizer',
  },
  {
    name: 'Checkers AI Game',
    description: 'AI-powered checkers game with advanced strategic gameplay.',
    icon: PuzzlePieceIcon,
    buttonLabel: 'View on GitHub',
    link: 'https://github.com/Abhi00kh/Checkers-Game-AI',
    image: 'https://placehold.co/600x400/581c87/FFFFFF/png?text=Checkers+AI',
  },
];

const ProjectCard = ({ project }) => {
  const { name, description, icon: Icon, buttonLabel, link, featured, image } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden
        ${featured 
          ? 'border-2 border-blue-500/30' 
          : 'border border-blue-500/20'}`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white text-xs py-1 px-3 rounded-full">
          Featured Project
        </div>
      )}
      
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} project screenshot`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90"></div>
        
        <div className="absolute bottom-4 left-4">
          <div className={`p-2 rounded-full inline-flex items-center justify-center ${featured ? 'bg-blue-600/80' : 'bg-slate-800/80'}`}>
            <Icon className={`h-6 w-6 ${featured ? 'text-white' : 'text-blue-400'}`} aria-hidden="true" />
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className={`p-6 flex-grow flex flex-col ${featured ? 'bg-gradient-to-br from-blue-950/80 to-slate-950/90' : 'bg-slate-900/90 backdrop-blur-sm'}`}>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-block px-6 py-3 text-sm font-medium rounded-full shadow-md transition-all duration-300 
            ${featured 
              ? 'text-white bg-blue-600 hover:bg-blue-700' 
              : 'text-blue-400 border border-blue-500/30 hover:bg-blue-500/10'}`}
        >
          {buttonLabel}
        </a>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Trigger animation when the section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Listen for viewport changes to determine mobile state.
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleProjects = showMore || !isMobile ? projectsData : projectsData.slice(0, 3);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
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
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 inline-block">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of the projects I've developed, from web applications to AI solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>

        {isMobile && !showMore && projectsData.length > 3 && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => setShowMore(true)}
              className="rounded-full px-6 py-3 text-sm font-semibold border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
            >
              Show More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}