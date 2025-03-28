import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Effect to handle scroll and determine active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance based on scroll position
      setScrolled(window.scrollY > 50);
      
      // Find the current active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle a class on your <html> or <body> element
    document.documentElement.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <Disclosure as="nav" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-2 bg-slate-950/85 backdrop-blur-xl shadow-lg' : 'py-4 bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-blue-500 font-bold text-2xl tracking-wide">
                {`<`} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">ABHIJIT</span> {`/>`}
              </div>
            </motion.div>

            {/* Desktop navigation */}
            <motion.div 
              className="hidden sm:flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {navigation.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                      isActive 
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-md bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm -z-10"
                        layoutId="navBackground"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </motion.a>
                );
              })}
              
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm text-gray-300 hover:text-white transition-colors ml-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </motion.button>
              
              <motion.a
                href="mailto:abhijitkhule0@gmail.com"
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Mobile navigation button */}
            <div className="sm:hidden flex items-center">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 mr-2 rounded-full bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </motion.button>
            
              <DisclosureButton className="inline-flex items-center justify-center rounded-full p-2 text-gray-300 hover:bg-blue-600/20 hover:text-white border border-blue-500/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden">
            <motion.div 
              className="px-4 pb-4 pt-2 space-y-2 bg-slate-900/90 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {navigation.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={`block rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600/20 text-white border border-blue-500/30 backdrop-blur-sm'
                        : 'text-gray-300 hover:bg-blue-600/10 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}
              
              <DisclosureButton
                as="a"
                href="mailto:abhijitkhule0@gmail.com"
                className="block w-full text-center rounded-lg px-4 py-2.5 mt-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                Get In Touch
              </DisclosureButton>
            </motion.div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}