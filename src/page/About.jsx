import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Picture from "../components/Picture";
import { GoProjectRoadmap } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsJavascript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { TbBrandAdobePhotoshop } from "react-icons/tb"; //adobe ps icon
import { FaWindows } from "react-icons/fa"; //windows icon
import { GrGoogle } from "react-icons/gr"; //google icon
import { FaNetworkWired } from "react-icons/fa"; //network icon
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/title.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const programLanguages = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      percentage: "80%",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      percentage: "80%",
    },
    {
      name: "JavaScript",
      icon: <BsJavascript />,
      percentage: "60%",
    },
    {
      name: "React-Vite",
      icon: <FaReact />,
      percentage: "30%",
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
      percentage: "80%",
    },
    {
      name: "C++",
      icon: <TbBrandCpp />,
      percentage: "80%",
    },
    {
      name: "PhotoShop",
      icon: <TbBrandAdobePhotoshop />,
      percentage: "80%",
    },
    {
      name: "Ms.Office",
      icon: <FaWindows />,
      percentage: "90%",
    },
    {
      name: "Google App",
      icon: <GrGoogle />,
      percentage: "90%",
    },
    {
      name: "CCNA 1",
      icon: <FaNetworkWired />,
      percentage: "30%",
    },
  ];

  return (
    <>
      <div className="scroll-smooth">
        <div className="w-full  mt-30 mx-auto p-8 h-full flex flex-col justify-center items-center">
          <div className="max-w-6xl h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg shadow-lg overflow-hidden p-4 place-items-center">
            {/* Picture — slides in from left + zoom */}
            <div
              className="w-full h-full flex justify-center items-center"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
            >
              <div
                className="w-78"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="700"
                className="animate-float w-full"
              >
                <Picture />
              </div>
            </div>

            {/* Text content — staggered per element */}
            <div className="p-6">
              <h1
                className="text-3xl font-bold mb-4 text-center"
                data-aos="fade-down"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                About Me
              </h1>

              <h2
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="200"
                className="text-center md:text-start lg:text-start text-2xl font-bold mb-4 text-amber-700"
              >
                Chork RaYuth
              </h2>

              <p
                className="text-lg text-gray-700  text-justify mb-6"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
              >
                I am a passionate web developer with a love for creating
                beautiful and functional websites. With a strong background in
                HTML, CSS, and JavaScript, I enjoy bringing ideas to life
                through code. I am always eager to learn new technologies and
                stay up-to-date with the latest trends in web development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-2 place-content-center w-full">
                <div
                  className=" w-full p-2 bg-amber-500 text-xl text-amber-50 text-center rounded-3xl h-30 shadow-md flex flex-col justify-center items-center gap-2 py-b-4 hover:rotate-[-10deg] transition-transform duration-300 ease-in-out border-b-2"
                  data-aos="flip-left"
                  data-aos-duration="700"
                  data-aos-delay="400"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="font-bold flex gap-2">
                    {" "}
                    <span className="mt-[5px]">
                      <BsPersonWorkspace />
                    </span>{" "}
                    Experience
                  </h2>
                  <p className="text-2xl lg:text-4xl  font-semibold ">
                    1+ Years
                  </p>
                  <span className="text-sm lg:text-lg ">Teaching computer</span>
                </div>

                <div
                  className=" w-full p-2 bg-transparent text-2xl text-amber-50 text-center rounded-3xl h-30 shadow-md flex flex-col justify-center items-center gap-2 border-b-4 border-amber-500 py-b-4 hover:rotate-[10deg] transition-transform duration-300 ease-in-out border-b-2"
                  data-aos="flip-right"
                  data-aos-duration="700"
                  data-aos-delay="550"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="font-bold text-amber-500 flex gap-2">
                    {" "}
                    <span className="mt-[5px]">
                      <GoProjectRoadmap />
                    </span>{" "}
                    Project
                  </h2>
                  <p className="text-2xl lg:text-4xl  font-semibold  text-amber-400">
                    2+
                  </p>
                  <span className="text-sm lg:text-lg text-black/30">
                    Web Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Language */}
        <div className="w-full h-auto max-w-full flex justify-center  mt-[-50px]  ">
          <div
            className="w-full bg-transparent shadow-xl p-2 rounded-3xl border-b-4 border-gray-50 backdrop-blur-2xl flex flex-col justify-center cursor-pointer "
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <div
              className="w-full h-full flex h-12 justify-center items-center text-center "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <h1 className="bg-blue-500 p-4 rounded-t-2xl rounded-b-lg font-semibold shadow-md text-amber-100 mb-16 ">
                {" "}
                Program Languages, Tools, Frameworks, Office Software
              </h1>
            </div>
            {/* map program languages */}
            <div className=" w-full lg:w-4/5 h-full flex flex-wrap justify-center items-center m-auto gap-4 p-2  mb-2">
              {programLanguages.map((items, index) => {
                return (
                  <motion.div
                    className="
                      bg-amber-50 w-[200px] h-auto
                      flex flex-col justify-center items-center gap-2
                      p-4 rounded-lg shadow-lg
                      text-amber-600
                      border-b-4 border-amber-500 border-l-2 border-r-2"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 120,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -10,
                      rotate: 2,
                    }}
                    whileTap={{
                      scale: 0.95,
                      borderColor: "#fbbf24",
                    }}
                  >
                    <h1 className="text-xl">{items.name}</h1>
                    <h1 className="text-4xl">{items.icon}</h1>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-transparent m-auto  p-4 rounded-3xl backdrop-blur-2xl flex flex-col justify-center mt-4">
        <h1
          className="text-center text-2xl font-semibold text-green-600 border-b-6 border-cyan-500 border-r-2 border-l-2 w-fit m-auto p-4 rounded-lg shadow-md"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          Skill Proficiency and Experience Work + Assignment at school
        </h1>
        <div className="w-full bg-transparent shadow-xl p-4 rounded-3xl border-b-4 backdrop-blur-2xl grid grid-cols-2 place-items-center gap-4 cursor-pointer  mt-4">
          {programLanguages.map((items) => {
            return (
              <motion.div
                className="text-center text-2xl font-semibold text-amber-600 m-auto rounded-lg shadow-lg border-b-8 border-cyan-500 border-l-2
                 border-r-2 container h-full px-6  flex flex-col justify-center items-center gap-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    duration: 0.15,
                  },
                }}
              >
                <div className="w-full h-auto flex flex-wrap items-center justify-between gap-4 p-2">
                  <h1 className="text-sm lg:text-xl md:text-lg  text-start  h-auto flex items-center mt-2 gap-4">
                    {items.name}
                  </h1>
                  <span className="text-2xl lg:text-4xl md:text-3xl">
                    {items.icon}
                  </span>
                </div>
                <div className="w-full h-6 rounded-full overflow-hidden flex  items-center gap-4 p-2 mb-2">
                  {/* width color */}
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden mt-2">
                    <div
                      className=" container h-full bg-sky-500 rounded-full"
                      style={{
                        width: items.percentage,
                        backgroundColor:
                          items.percentage >= "80%"
                            ? "#3b82f6"
                            : items.percentage >= "60%"
                              ? "#fbbf24"
                              : items.percentage >= "30%"
                                ? "#ef4444"
                                : "#10b981",
                      }}
                    ></div>
                  </div>
                  {/* number */}
                  <span className="text-sm text-gray-600 ">
                    {items.percentage}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
