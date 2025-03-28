import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaAward } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DockerCertification from './assets/docker-certification.png';
import MachineLearningCertification from './assets/machine-learning-certification.png';
import BusinessIntelligenceCertification from './assets/business-intelligence-certification.png';
import datacertification from './assets/datacertification.png';

const certifications = [
  {
    name: 'Docker Foundations Professional Certificate',
    id: 'cert-docker',
    image: DockerCertification,
    issuer: 'Docker Inc.',
    date: 'April 2023',
    description: 'Comprehensive understanding of Docker containerization, deployment, and best practices for microservices architecture.'
  },
  {
    name: 'Machine Learning with Python',
    id: 'cert-ml',
    image: MachineLearningCertification,
    issuer: 'IBM',
    date: 'January 2023',
    description: 'Proficiency in Python for machine learning, covering algorithms, data preparation, and model deployment.'
  },
  {
    name: 'Business Intelligence Essentials',
    id: 'cert-bi',
    image: BusinessIntelligenceCertification,
    issuer: 'Microsoft',
    date: 'September 2022',
    description: 'Advanced data visualization, reporting, and business analytics skills for making data-driven decisions.'
  },
  {
    name: 'Data Engineering Foundations',
    id: 'cert-data',
    image: datacertification,
    issuer: 'IBM',
    date: 'July 2022',
    description: 'Database design, ETL processes, and data pipeline implementation for robust data architectures.'
  },
  {
    name: 'Complete Guide to Power BI',
    id: 'cert-powerbi',
    image: datacertification,
    issuer: 'Microsoft',
    date: 'May 2022',
    description: 'Creating interactive dashboards and reports with Power BI for effective data visualization and analysis.'
  },
];

const Certifications = () => {
  const [currentCert, setCurrentCert] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const handleNextCert = () => {
    setCurrentCert((prevCert) => (prevCert + 1) % certifications.length);
  };

  const handlePrevCert = () => {
    setCurrentCert((prevCert) =>
      prevCert === 0 ? certifications.length - 1 : prevCert - 1
    );
  };

  const cert = certifications[currentCert];
  
  // Auto-rotate certifications
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        handleNextCert();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [currentCert, inView]);

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950"
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
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 inline-block">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Professional credentials that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Certificate Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600/30 p-3 rounded-full mr-4">
                  <FaAward className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-white">{cert.name}</h3>
              </div>
              
              <div className="mb-6 flex justify-between text-sm">
                <span className="text-blue-400">{cert.issuer}</span>
                <span className="text-gray-400">{cert.date}</span>
              </div>
              
              <p className="text-gray-300 text-lg mb-6">
                {cert.description}
              </p>
              
              {/* Pagination dots */}
              <div className="flex justify-center space-x-2 my-6">
                {certifications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCert(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCert === index ? 'bg-blue-500 scale-125' : 'bg-gray-600'
                    }`}
                    aria-label={`View certificate ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevCert}
                  className="rounded-full p-3 bg-slate-800 hover:bg-blue-600 text-white transition-colors duration-300"
                  aria-label="Previous certificate"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNextCert}
                  className="rounded-full p-3 bg-slate-800 hover:bg-blue-600 text-white transition-colors duration-300"
                  aria-label="Next certificate"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Right side: Certificate Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-[4/3] relative"
                >
                  <img 
                    src={cert.image} 
                    alt={`${cert.name} certification`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-full border border-blue-500/20 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-medium text-blue-400">{cert.issuer}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;