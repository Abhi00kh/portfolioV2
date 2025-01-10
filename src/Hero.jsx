// 'use client'

// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer' // Added import
// import vscodeimg from './assets/hero1.png' // Replace with your actual image path
// export default function Hero() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [ref, inView] = useInView({
//       triggerOnce: true,
//       threshold: 0.1,
//     });

//     return (
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto py-32 sm:py-36 lg:py-48 flex items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* Text Content */}
//           <div className="flex-1 max-w-xl">
//             <div className="hidden sm:mb-8 sm:flex">
//               <div className="relative rounded-full px-5 py-2 text-sm ring-1 hover:ring-gray-900/20 ml-7">
//                 Hello I am. <span className="font-semibold">Software Developer</span>
//                 <a href="#" className="font-semibold ml-2">
//                   <span aria-hidden="true" className="absolute inset-0"></span>
//                   <span aria-hidden="true">&rarr;</span>
//                 </a>
//               </div>
//             </div>
//             <div className="pl-4 sm:pl-9">
//               <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
//                 Abhijit Khule
//               </h1>
//               <p className="mt-8 text-base font-medium sm:text-xl">
//                 Welcome to my portfolio. Here you will find my latest projects and achievements. Feel free to explore and learn more about my work.
//               </p>
//               <div className="mt-10 flex items-center gap-x-6">
//                 <a
//                   href="#"
//                   className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Contact
//                 </a>
//                 <div className="flex gap-x-4">
//                   <a href="#">
//                     <FaFacebook size={24} className="text-current" />
//                   </a>
//                   <a href="#">
//                     <FaTwitter size={24} className="text-current" />
//                   </a>
//                   <a href="#">
//                     <FaLinkedin size={24} className="text-current" />
//                   </a>
//                   <a href="#">
//                     <FaGithub size={24} className="text-current" />
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-10">
//                 {/* Additional content can go here */}
//               </div>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="hidden lg:block flex-shrink-0 w-1/2 relative">
//             <motion.img
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 2 }}
//               alt="Portfolio screenshot"
//               src={vscodeimg} // Replace with an actual screenshot of your portfolio
//               className=" top-0 right-0 transform translate-x-1/4 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
//               ref={ref} // Attach the ref to the image
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// import { useState } from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import vscodeimg from './assets/hero1.png'; // Replace with your actual image path
// import { Dialog } from '@headlessui/react'; 
// import { AiOutlineClose } from 'react-icons/ai'; 
// import ContactForm from './contact'; 

// export default function Hero() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="relative overflow-hidden">
//       <div className="max-w-7xl mx-auto py-32 sm:py-36 lg:py-48 flex items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* Text Content */}
//         <div className="flex-1 max-w-xl">
//           <div className="hidden sm:mb-8 sm:flex">
//             <div className="relative rounded-full px-5 py-2 text-sm ring-1 hover:ring-gray-900/20 ml-7">
//               Hello I am. <span className="font-semibold">Software Developer</span>
//               <a href="#" className="font-semibold ml-2">
//                 <span aria-hidden="true" className="absolute inset-0"></span>
//                 <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           {/* Animated Text with Motion */}
//           <div className="pl-4 sm:pl-9">
//             <motion.h1 
//               className="text-5xl font-semibold tracking-tight sm:text-6xl"
//               initial={{ opacity: 0, x: -100 }} // Start off screen to the left
//               animate={{ opacity: 1, x: 0 }} // Slide into place and fade in
//               transition={{ duration: 1 }}
//             >
//               Abhijit Khule
//             </motion.h1>

//             <motion.p 
//               className="mt-8 text-base font-medium sm:text-xl"
//               initial={{ opacity: 0, y: 20 }} // Start from below
//               animate={{ opacity: 1, y: 0 }} // Slide up and fade in
//               transition={{ duration: 1.2 }}
//             >
//               Welcome to my portfolio. Here you will find my latest projects and achievements. Feel free to explore and learn more about my work.
//             </motion.p>

//             <div className="mt-10 flex items-center gap-x-6">
//               {/* Animated Button */}
//               <motion.button
//                 onClick={openModal} 
//                 className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Contact
//               </motion.button>

//               {/* Social Media Icons */}
//               <div className="flex gap-x-4">
//                 <a href="#" aria-label="Facebook">
//                   <motion.div 
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                     className="text-current"
//                   >
//                     <FaFacebook size={24} />
//                   </motion.div>
//                 </a>
//                 <a href="#" aria-label="Twitter">
//                   <motion.div 
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                     className="text-current"
//                   >
//                     <FaTwitter size={24} />
//                   </motion.div>
//                 </a>
//                 <a href="#" aria-label="LinkedIn">
//                   <motion.div 
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                     className="text-current"
//                   >
//                     <FaLinkedin size={24} />
//                   </motion.div>
//                 </a>
//                 <a href="#" aria-label="GitHub">
//                   <motion.div 
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                     className="text-current"
//                   >
//                     <FaGithub size={24} />
//                   </motion.div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="hidden lg:block flex-shrink-0 w-1/2 relative">
//           <motion.img
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 2 }}
//             alt="Portfolio screenshot"
//             src={vscodeimg}
//             className="top-0 right-0 transform translate-x-1/4 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
//             ref={ref}
//           />
//         </div>
//       </div>

//       {/* Modal for Contact Form */}
//       {isModalOpen && (
//         <Dialog open={isModalOpen} onClose={closeModal}>
//           <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
//             <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//               <button
//                 onClick={closeModal} 
//                 className="absolute top-2 right-2 text-gray-600"
//               >
//                 <AiOutlineClose className="h-6 w-6" />
//               </button>
//               <ContactForm />
//             </div>
//           </div>
//         </Dialog>
//       )}
//     </div>
//   );
// }
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import vscodeimg from './assets/hero1.png'; // Replace with your actual image path
import { Dialog } from '@headlessui/react'; 
import { AiOutlineClose } from 'react-icons/ai'; 
import ResumePDF from './assets/Resume..pdf'; // Path to your resume PDF

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // State for controlling the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="relative overflow-hidden">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="max-w-7xl mx-auto py-32 sm:py-36 lg:py-48 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="flex-1 max-w-xl">
          <div className="hidden sm:mb-8 sm:flex">
            <div className="relative rounded-full px-5 py-2 text-sm ring-1 hover:ring-gray-900/20 ml-7">
              Hello I am. <span className="font-semibold">Software Developer</span>
              <a href="#about" className="font-semibold ml-2">Learn more</a>
            </div>
          </div>
          <div className="pl-4 sm:pl-9">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Abhijit Khule
            </h1>
            <p className="mt-8 text-base font-medium sm:text-xl">
              Welcome to my portfolio. Here you will find my latest projects and achievements. Feel free to explore and learn more about my work.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                onClick={openModal} // Open the resume modal
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Resume
              </button>

              <div className="flex gap-x-4">
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} className="text-current" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} className="text-current" />
                </a>
                <a href="https://linkedin.com/in/abhijit-khule" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} className="text-current" />
                </a>
                <a href="https://github.com/Abhi00kh" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} className="text-current" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block flex-shrink-0 w-1/2 relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2 }}
            alt="Portfolio screenshot"
            src={vscodeimg}
            className=" top-0 right-0 transform translate-x-1/4 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            ref={ref} 
          />
        </div>
      </div>

      {/* Modal for Resume PDF */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onClose={closeModal}>
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button
                onClick={closeModal} 
                className="absolute top-2 right-2 text-gray-600"
              >
                <AiOutlineClose className="h-6 w-6" />
              </button>
              <iframe
                src={ResumePDF}
                width="100%"
                height="600"
                title="Resume"
                className="rounded-lg"
              />
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
