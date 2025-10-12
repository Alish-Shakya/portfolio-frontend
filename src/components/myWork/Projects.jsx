import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vyomite from "../../assets/Images/Vyomite.png";
import Gym from "../../assets/Images/Gym.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Vyomite",
      description:
        "A modern IT company website built with React and Tailwind, showcasing digital solutions and tech-driven services through an elegant, responsive design.",
      image: Vyomite,
      link: "https://yourportfolio.com",
      github: "https://github.com/Alish-Shakya/portfolio",
    },
    {
      id: 2,
      title: "Planet Fitness Gym",
      description:
        "A sleek and engaging gym website designed to promote fitness programs and memberships, offering a clean and motivating digital presence.",
      image: Gym,
      link: "#",
      github: "https://github.com/Alish-Shakya/BSc-CSIT-project",
    },
    {
      id: 3,
      title: "TU Course Info App",
      description:
        "RA React-based web application that visualizes BSc.CSIT course structures, helping students easily explore and understand their academic roadmap.act web app for TU course structure visualization.",
      image: Gym,
      link: "#",
      github: "https://github.com/Alish-Shakya/BSc-CSIT-project",
    },
  ];

  // Current index for mobile slider
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Framer Motion slide variants
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section
      id="projects"
      className="px-4 py-16 sm:px-6 md:px-12 lg:px-20 bg-transparent"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center md:mb-16">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            A Glimpse Into the Projects That Reflect
            <span className="bg-gradient-to-l from-green-600 to-white bg-clip-text text-transparent">
              My Passion and Skill.
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Explore a collection of my projects that embody both creativity and
            technical expertise. Each one reflects the dedication, precision,
            and passion I bring to every challenge.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border-2 border-green-400 transition-all duration-300 
                         hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] 
                         hover:scale-[1.02] hover:-translate-y-1
                         flex flex-col overflow-hidden bg-[#0f0f0f]/40 backdrop-blur-sm"
            >
              <div className="w-full overflow-hidden flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-5 sm:p-6 text-gray-300">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-5 text-sm sm:text-base">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:text-green-300 font-medium"
                  >
                    View →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Code 💻
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="sm:hidden relative h-[430px] flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[current].id}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute w-[90%] rounded-xl border border-green-500 
                         flex flex-col overflow-hidden bg-[#0f0f0f]/40 backdrop-blur-sm"
            >
              <div className="w-full overflow-hidden flex justify-center items-center">
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-5 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {projects[current].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {projects[current].description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4 text-sm">
                  <a
                    href={projects[current].link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:text-green-300 font-medium"
                  >
                    View →
                  </a>
                  <a
                    href={projects[current].github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Code 💻
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
