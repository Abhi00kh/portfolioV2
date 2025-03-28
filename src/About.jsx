import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaDocker, FaGithub, FaJs, FaNodeJs, FaJava, FaLinkedin } from "react-icons/fa";
import { SiMysql, SiTensorflow, SiTypescript, SiFlask, SiDjango } from "react-icons/si";
import profilePic from "./assets/profile.jpg";

// Organized skills with categories for better presentation
const skills = [
  { icon: FaReact, name: "React", color: "#61DAFB", category: "frontend" },
  { icon: FaJs, name: "JavaScript", color: "#F7DF1E", category: "frontend" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "frontend" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933", category: "backend" },
  { icon: SiDjango, name: "Django", color: "#092E20", category: "backend" },
  { icon: SiFlask, name: "Flask", color: "#000000", category: "backend" },
  { icon: FaJava, name: "Java", color: "#007396", category: "programming" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1", category: "database" },
  { icon: FaDocker, name: "Docker", color: "#2496ED", category: "devops" },
  { icon: FaGithub, name: "GitHub", color: "#181717", category: "devops" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00", category: "ai" },
];

const personalDetails = [
  { label: "Profile", value: "Web Development & Software Development" },
  { label: "Domain", value: "Software Development & Security" },
  { label: "Education", value: "Bachelor of Engineering" },
  { label: "Languages", value: "English, Hindi, Marathi" },
  { label: "Other Skills", value: "Cloud, Git, Google Analytics, SEO" },
  { label: "Interests", value: "Traveling, Programming, Open-World 3D RPG Games" },
];

const education = [
  { 
    id: 1, 
    degree: "Bachelor of Engineering", 
    institution: "Savitribai Phule Pune University", 
    year: "2021 - 2024", 
    gpa: "9.0",
    description: "Focused on computer science fundamentals, data structures, algorithms, and web development."
  },
  { 
    id: 2, 
    degree: "Higher Secondary Certificate", 
    institution: "N.E.S and Junior College, Sinnar", 
    year: "2018 - 2020",
    description: "Concentrated on math, physics, and computer science to build a strong foundation for engineering studies."
  },
];

export default function About() {
  // Use multiple intersection observers for more controlled animations
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950"
      ref={sectionRef}
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 inline-block">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Photo & Personal Details */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mb-6 md:mb-10">
              <div className="rounded-xl overflow-hidden shadow-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-slate-950/80 backdrop-blur-sm">
                <img 
                  src={profilePic} 
                  alt="Abhijit Khule - Software Developer" 
                  className="w-full aspect-square object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400.png?text=Abhijit+Khule";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">10+</span>
                  <span className="text-xs">Projects Completed</span>
                </div>
              </div>
            </div>

            <motion.div 
              className="mt-12 bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-1.5 h-5 bg-blue-500 rounded-full mr-2"></span>
                Personal Details
              </h3>
              <div className="space-y-3">
                {personalDetails.map((detail, idx) => (
                  <div key={idx} className="grid grid-cols-3">
                    <div className="col-span-1 text-blue-400 font-medium">{detail.label}:</div>
                    <div className="col-span-2 text-gray-300">{detail.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a
                  href="https://linkedin.com/in/abhijit-khule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg group"
                  aria-label="Visit my LinkedIn profile"
                >
                  <FaLinkedin className="group-hover:animate-bounce" /> 
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* About Text & Education */}
          <motion.div 
            className="lg:col-span-2 space-y-8 lg:space-y-12"
            initial={{ opacity: 0, x: 30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Bio */}
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="w-1.5 h-5 bg-blue-500 rounded-full mr-2"></span>
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I'm a results-driven software developer specializing in JavaScript (Node.js, React), Python (Flask, Django), and Java. With proficiency in MySQL, MongoDB, and RESTful APIs, I focus on building efficient and scalable full-stack applications.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4 text-base md:text-lg">
                Experienced in software development life cycles (SDLC) across Windows and Linux environments, I am passionate about delivering innovative solutions and continuously enhancing my technical expertise.
              </p>
              <div className="mt-6 pt-6 border-t border-blue-500/20">
                <h4 className="text-lg font-medium text-blue-400 mb-2">What I can bring to your project:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                    Full-stack development expertise
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                    Responsive web design
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                    API development and integration
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                    Database architecture
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-1.5 h-5 bg-blue-500 rounded-full mr-2"></span>
                Education
              </h3>
              
              <div className="space-y-12">
                {education.map((edu) => (
                  <motion.div 
                    key={edu.id}
                    className="relative pl-8 border-l-2 border-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + edu.id * 0.1 }}
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
                    <div className="mb-1 text-sm font-medium text-blue-400">{edu.year}</div>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-yellow-400 font-medium mt-1 flex items-center">
                        <span className="text-sm mr-1">GPA:</span> {edu.gpa}
                      </p>
                    )}
                    <p className="mt-2 text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Grouped by categories */}
        <motion.div 
          className="mt-24"
          variants={container}
          initial="hidden"
          ref={skillsRef}
          animate={skillsInView ? "show" : "hidden"}
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-semibold text-white text-center">
              Technical Skills
            </h3>
            <div className="h-1 w-16 bg-blue-500 mt-3 rounded-full"></div>
            <p className="mt-4 text-gray-300 text-center max-w-2xl">
              My technical toolkit includes these technologies that I've used in real-world projects
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex flex-col items-center p-5 md:p-6 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-blue-500/20 shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-xl hover:-translate-y-1 h-full">
                  <div 
                    className="text-3xl md:text-4xl mb-3 transition-transform duration-300 group-hover:transform group-hover:scale-110" 
                    style={{ color: skill.color }}
                  >
                    <skill.icon />
                  </div>
                  <span className="text-sm md:text-base text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Added visual categorization for skills */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/20 shadow-lg">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-1.5 h-5 bg-blue-500 rounded-full mr-2"></span>
                Areas of Expertise
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Frontend Development", items: "React, JavaScript, TypeScript, Responsive Design" },
                  { name: "Backend Development", items: "Node.js, Django, Flask, Express.js" },
                  { name: "Database Management", items: "MySQL, MongoDB, PostgreSQL" },
                  { name: "DevOps", items: "Docker, Git, CI/CD, AWS" },
                  { name: "Software Architecture", items: "RESTful APIs, Microservices" },
                  { name: "Tools & Methods", items: "Agile, Scrum, TDD" }
                ].map((area, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/10">
                    <h5 className="text-blue-400 font-medium mb-2">{area.name}</h5>
                    <p className="text-gray-300 text-sm">{area.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}