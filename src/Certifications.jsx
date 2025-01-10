// import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import DockerCertification from './assets/docker-certification.png';
// import MachineLearningCertification from './assets/machine-learning-certification.png';
// import BusinessIntelligenceCertification from './assets/business-intelligence-certification.png';
// import datacertification from './assets/datacertification.png';

// const certifications = [
//   {
//     name: 'Docker Foundations Professional Certificate',
//     id: 'cert-docker',
//     image: DockerCertification,
//   },
//   {
//     name: 'Machine Learning with Python',
//     id: 'cert-ml',
//     image: MachineLearningCertification,
//   },
//   {
//     name: 'Business Intelligence Essentials',
//     id: 'cert-bi',
//     image: BusinessIntelligenceCertification,
//   },
//   {
//     name: 'Data Engineering Foundations',
//     id: 'cert-data',
//     image: datacertification,
//   },
//   {
//     name: 'Complete Guide to Power BI',
//     id: 'cert-powerbi',
//     image: datacertification,
//   },
// ];

// const Certifications = () => {
//   const [currentCert, setCurrentCert] = useState(0);

//   const handleNextCert = () => {
//     setCurrentCert((prevCert) => (prevCert + 1) % certifications.length);
//   };

//   const handlePrevCert = () => {
//     setCurrentCert((prevCert) =>
//       prevCert === 0 ? certifications.length - 1 : prevCert - 1
//     );
//   };

//   const cert = certifications[currentCert];

//   return (
//     <div className="bg-gray-950">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Certifications</h2>
//           <p className="mt-4 text-gray-300">
//             Here are some of the certifications I have earned to further enhance my skills and knowledge.
//           </p>

//           <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
//             <div key={cert.id} className="border-t border-gray-200 pt-4">
//               <dt className="font-medium text-gray-100">{cert.name}</dt>
//             </div>
//           </dl>

//           <div className="mt-8 flex justify-center gap-4 sm:flex">
//             <button
//               onClick={handlePrevCert}
//               className="hidden sm:block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={handleNextCert}
//               className="hidden sm:block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         <div className="relative flex justify-center items-center">
//           <button
//             onClick={handlePrevCert}
//             className="absolute left-0 px-2 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 sm:hidden"
//           >
//             <FaArrowLeft />
//           </button>
//           <img
//             alt={`${cert.name} logo`}
//             src={cert.image}
//             className="rounded-lg bg-gray-100 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
//           />
//           <button
//             onClick={handleNextCert}
//             className="absolute right-0 px-2 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 sm:hidden"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certifications;
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import DockerCertification from './assets/docker-certification.png';
import MachineLearningCertification from './assets/machine-learning-certification.png';
import BusinessIntelligenceCertification from './assets/business-intelligence-certification.png';
import datacertification from './assets/datacertification.png';

const certifications = [
  {
    name: 'Docker Foundations Professional Certificate',
    id: 'cert-docker',
    image: DockerCertification,
  },
  {
    name: 'Machine Learning with Python',
    id: 'cert-ml',
    image: MachineLearningCertification,
  },
  {
    name: 'Business Intelligence Essentials',
    id: 'cert-bi',
    image: BusinessIntelligenceCertification,
  },
  {
    name: 'Data Engineering Foundations',
    id: 'cert-data',
    image: datacertification,
  },
  {
    name: 'Complete Guide to Power BI',
    id: 'cert-powerbi',
    image: datacertification,
  },
];

const Certifications = () => {
  const [currentCert, setCurrentCert] = useState(0);

  const handleNextCert = () => {
    setCurrentCert((prevCert) => (prevCert + 1) % certifications.length);
  };

  const handlePrevCert = () => {
    setCurrentCert((prevCert) =>
      prevCert === 0 ? certifications.length - 1 : prevCert - 1
    );
  };

  const cert = certifications[currentCert];

  return (
    <div className="bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Certifications</h2>
          <p className="mt-4 text-gray-300">
            Here are some of the certifications I have earned to further enhance my skills and knowledge.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div key={cert.id} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-100">{cert.name}</dt>
            </div>
          </dl>

          <div className="mt-8 flex justify-center gap-4 sm:flex">
            <button
              onClick={handlePrevCert}
              className="hidden sm:block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNextCert}
              className="hidden sm:block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              <FaArrowRight />
            </button>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrevCert}
            className="absolute left-0 px-2 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 sm:hidden"
          >
            <FaArrowLeft />
          </button>
          <AnimatePresence mode="wait">
            <motion.img
              key={cert.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              alt={`${cert.name} logo`}
              src={cert.image}
              className="rounded-lg bg-gray-100 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </AnimatePresence>
          <button
  onClick={handleNextCert}
  className="absolute right-0 px-2 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 sm:hidden"
>
  <FaArrowRight />
</button>
</div>
</div>


</div>
);
};

export default Certifications;