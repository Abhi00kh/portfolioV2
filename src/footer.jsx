const Footer = () => {
    return (
      <footer>
        <div className="relative h-full w-full bg-slate-950">
          {/* Background layer with z-0 */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
          
          {/* Content layer with z-10 */}
          <div className="w-full min-h-screen flex items-center justify-center bg-black relative z-10">
            <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
              <div className="w-full text-4xl md:text-5xl font-bold">
                <h1 className="w-full md:w-2/3">Let’s Connect and Build Something Great</h1>
              </div>
              <div className="flex mt-6 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400 text-xs md:text-sm">
                  If you're interested in collaborating or have any questions, feel free to reach out. I'm always open to new opportunities and passionate about building impactful solutions.
                </p>
                <div className="w-44 pt-4 md:pt-0">
                  <a href="mailto:abhijitkhule0@gmail.com" className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-8 md:mt-12 mb-4">
                <div className="flex flex-row justify-between">
                  <a href="https://www.linkedin.com/in/abhijit-khule/"></a>
                </div>
                <hr className="border-gray-600" />
                <p className="w-full text-center my-4 text-gray-600 text-xs md:text-sm">
                  Copyright © 2025 Abhijit Khule
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  