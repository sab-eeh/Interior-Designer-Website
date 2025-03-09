import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import image5 from "./Images/image5.jpg";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      year: "2018",
      title: "Frontend Developer",
      company: "Company A",
      description: "Worked on React.js applications with modern UI/UX.",
    },
    {
      id: 2,
      year: "2020",
      title: "Full Stack Developer",
      company: "Company B",
      description: "Built REST APIs and scalable frontend systems.",
    },
    {
      id: 3,
      year: "2022",
      title: "Senior Developer",
      company: "Company C",
      description: "Led a team in developing e-commerce platforms.",
    },
    {
      id: 4,
      year: "2024",
      title: "Tech Lead",
      company: "Company D",
      description: "Managed multiple development teams.",
    },
  ];
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          scrollContainerRef.current;
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(scrolled);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="bg-[#111111] w-full h-[100vh] flex justify-center items-center gap-6 px-14 py-16 overflow-hidden ">
        <div className="border-1 border-[#ffffff28] p-2 rounded-2xl -ml-20">
          <img
            src={image5}
            alt="Living Room"
            className="w-[auto] h-auto rounded-2xl "
          />
        </div>
        <div className="text-white ">
          <div className="text-white flex-col space-y-4 px-12" >
            <h1 className="text-5xl font-bold text-amber-200">Work Experience</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center ">
              <div className="w-[40vw] h-[68vh] flex rounded-2xl shadow-lg overflow-hidden relative">
                {/* Vertical Progress Bar */}
                <div className="w-2 bg-[#1d1d1d] rounded-full absolute left-5 top-12 bottom-0">
                  <motion.div
                    className="w-full bg-white rounded-full"
                    style={{ height: `${scrollProgress}%` }}
                  />
                </div>

                {/* Scrollable Work Experience Section */}
                <div
                  className="ml-6 mt-6 w-full px-6 overflow-y-auto"
                  ref={scrollContainerRef}
                  style={{
                    maxHeight: "500px",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="mt-6 p-4 bg-[#1d1d1d] rounded-lg shadow"
                    >
                      <h3 className="text-lg font-semibold text-amber-200">
                        {exp.year}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {exp.title} at {exp.company}
                      </p>
                      <p className="text-white mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
