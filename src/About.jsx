// import React from "react";
// import { 
//   FaReact, FaDocker, FaGithub, FaJs, FaNodeJs, FaJava 
// } from "react-icons/fa";
// import { 
//   SiMysql, SiTensorflow, SiTypescript, SiFlask, SiDjango 
// } from "react-icons/si";

// export default function About() {
//   return (
//     <section className="relative bg-gray-80 dark:bg-gray-900 py-20 px-6 sm:py-24 lg:px-8">
      
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">

//         {/* About Me Section */}
//         <div className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0">
//           <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
//             About Me
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
//             Hi, I’m Abhijit Khule. A passionate developer focused on creating intuitive and impactful software solutions
//             using cutting-edge technologies like AI, web development, and software engineering.
//           </p>
//         </div>

//         {/* Separator Line */}
//         <div className="lg:h-24 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lg:block hidden"></div>

//         {/* Education and Skills Cards */}
//         <div className="lg:w-2/3 mt-16 lg:mt-0 space-y-11 lg:ml-auto">

//           {/* Education Card */}
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
//             <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left mb-8">
//               Education
//             </h3>
//             <div className="relative border-l border-gray-200 dark:border-gray-700 max-w-5xl mx-auto lg:max-w-full">
//               <div className="mb-12 ml-6 flex items-center">
//                 <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
//                   <span className="text-white text-sm font-semibold">1</span>
//                 </span>
//                 <div className="ml-16">
//                   <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Engineering</h4>
//                   <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//                     Savitribai Phule Pune University (2021 - 2024) - GPA: 9.09
//                   </p>
//                 </div>
//               </div>

//               <div className="mb-12 ml-6 flex items-center">
//                 <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
//                   <span className="text-white text-sm font-semibold">2</span>
//                 </span>
//                 <div className="ml-16">
//                   <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Higher Secondary Certificate</h4>
//                   <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//                     Completed with a GPA of 68.77 (2018 - 2020)
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Skills Card */}
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
//             <h3 className="text-3xl font-semibold text-gray-900 dark:text-white text-center lg:text-left mb-8">
//               Skills
//             </h3>
//             <div className="grid grid-cols- sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
//               <div className="flex flex-col items-center">
//                 <FaReact className="text-6xl text-blue-600 dark:text-blue-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">React</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <FaDocker className="text-6xl text-blue-600 dark:text-blue-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Docker</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <FaGithub className="text-6xl text-blue-600 dark:text-blue-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">GitHub</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <FaJs className="text-6xl text-yellow-500 dark:text-yellow-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">JavaScript</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <FaNodeJs className="text-6xl text-green-600 dark:text-green-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Node.js</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <FaJava className="text-6xl text-orange-500 dark:text-orange-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Java</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <SiMysql className="text-6xl text-blue-600 dark:text-blue-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">SQL Database</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <SiTensorflow className="text-6xl text-blue-600 dark:text-blue-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">TensorFlow</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <SiTypescript className="text-6xl text-blue-600 dark:text-blue-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">TypeScript</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <SiFlask className="text-6xl text-green-600 dark:text-green-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Flask</p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <SiDjango className="text-6xl text-green-600 dark:text-green-400" />
//                 <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Django</p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { 
  FaReact, FaDocker, FaGithub, FaJs, FaNodeJs, FaJava 
} from "react-icons/fa";
import { 
  SiMysql, SiTensorflow, SiTypescript, SiFlask, SiDjango 
} from "react-icons/si";

export default function About() {
  return (
    <section
      className="relative py-20   px-6 sm:py-24 lg:px-8"
      style={{
        background: 'linear-gradient(to right,rgba(98, 255, 250, 0.11) 1px, transparent 1px), linear-gradient(to bottom,rgba(0, 242, 255, 0.09) 1px, transparent 1px)',
        backgroundSize: '14px 24px',
      }}
    >
      {/* Main content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        {/* About Me Section */}
        <div className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Hi, I’m Abhijit Khule. A passionate developer focused on creating intuitive and impactful software solutions
            using cutting-edge technologies like AI, web development, and software engineering.
          </p>
        </div>

        {/* Education and Skills Cards */}
        <div className="lg:w-2/3 mt-16 lg:mt-0 space-y-11 lg:ml-auto">
          {/* Education Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left mb-8">
              Education
            </h3>
            <div className="relative border-l border-gray-200 dark:border-gray-700 max-w-5xl mx-auto lg:max-w-full">
              <div className="mb-12 ml-6 flex items-center">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                  <span className="text-white text-sm font-semibold">1</span>
                </span>
                <div className="ml-16">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Engineering</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Savitribai Phule Pune University (2021 - 2024) - GPA: 9.09
                  </p>
                </div>
              </div>
              <div className="mb-12 ml-6 flex items-center">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                  <span className="text-white text-sm font-semibold">2</span>
                </span>
                <div className="ml-16">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Higher Secondary Certificate</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Completed with a GPA of 68.77 (2018 - 2020)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white text-center lg:text-left mb-8">
              Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                <FaReact className="text-6xl text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">React</p>
              </div>

              <div className="flex flex-col items-center">
                <FaDocker className="text-6xl text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Docker</p>
              </div>

              <div className="flex flex-col items-center">
                <FaGithub className="text-6xl text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">GitHub</p>
              </div>

              <div className="flex flex-col items-center">
                <FaJs className="text-6xl text-yellow-500 dark:text-yellow-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">JavaScript</p>
              </div>

              <div className="flex flex-col items-center">
                <FaNodeJs className="text-6xl text-green-600 dark:text-green-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Node.js</p>
              </div>

              <div className="flex flex-col items-center">
                <FaJava className="text-6xl text-orange-500 dark:text-orange-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Java</p>
              </div>

              <div className="flex flex-col items-center">
                <SiMysql className="text-6xl text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">SQL Database</p>
              </div>

              <div className="flex flex-col items-center">
                <SiTensorflow className="text-6xl text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">TensorFlow</p>
              </div>

              <div className="flex flex-col items-center">
                <SiTypescript className="text-6xl text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">TypeScript</p>
              </div>

              <div className="flex flex-col items-center">
                <SiFlask className="text-6xl text-green-600 dark:text-green-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Flask</p>
              </div>

              <div className="flex flex-col items-center">
                <SiDjango className="text-6xl text-green-600 dark:text-green-400" />
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Django</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
