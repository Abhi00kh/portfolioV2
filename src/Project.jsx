import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, BookOpenIcon, FolderArrowDownIcon, PuzzlePieceIcon } from '@heroicons/react/20/solid';

const projects = [
  {
    name: 'Web App Firewall',
    description: 'A deep learning firewall detecting web app attacks with 95% accuracy.',
    icon: ShieldCheckIcon, // Security-focused
    buttonLabel: 'View Project',
    link: 'https://github.com/Abhi00kh/Firewall-final',
  },
  {
    name: 'Python Tutorial Site',
    description: 'A responsive Python tutorial site built with Vue.js for interactive learning.',
    icon: BookOpenIcon, // Education
    buttonLabel: 'Visit Site',
    link: 'https://abhi00kh.github.io/my-python-tutorial',
  },
  {
    name: 'File Categorizer',
    description: 'Python package automating file categorization with 400+ downloads.',
    icon: FolderArrowDownIcon, // File management
    buttonLabel: 'View on GitHub',
    link: 'https://github.com/Abhi00kh/file-categorizer',
  },
  {
    name: 'Checkers AI Game',
    description: 'AI-powered checkers game with advanced strategic gameplay.',
    icon: PuzzlePieceIcon, // Strategy
    buttonLabel: 'View on GitHub',
    link: 'https://github.com/Abhi00kh/Checkers-Game-AI',
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger at 20% visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const visibleProjects = showMore || window.innerWidth >= 640 ? projects : projects.slice(0, 2);

  return (
    <section
      ref={sectionRef}
      className="py-20"
      style={{
        background: 'linear-gradient(to right,rgba(79, 79, 79, 0.11) 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)',
        backgroundSize: '14px 24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-600"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-400"
          >
            Explore some of the projects I've developed.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative flex flex-col items-center text-center p-6 sm:p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <project.icon className="h-16 w-16 text-teal-500" aria-hidden="true" />
              <h3 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">{project.name}</h3>
              <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="mt-6 inline-block px-6 py-3 text-sm sm:text-base lg:text-lg font-medium text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transform transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.buttonLabel}
              </a>
            </motion.div>
          ))}
        </motion.div>
        {!showMore && window.innerWidth < 640 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(true)}
              className="inline-block px-6 py-4 text-lg font-medium text-teal-600 bg-white rounded-md shadow-md hover:bg-teal-100 transition-all duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
