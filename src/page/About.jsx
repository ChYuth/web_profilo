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
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <BsJavascript />,
    },
    {
      name: "React-Vite",
      icon: <FaReact />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "C++",
      icon: <TbBrandCpp />,
    },
    {
      name: "PhotoShop",
      icon: <TbBrandAdobePhotoshop />,
    },
    {
      name: "Ms.Office",
      icon: <FaWindows />,
    },
    {
      name: "Google App",
      icon: <GrGoogle />,
    },
    {
      name: "CCNA 1",
      icon: <FaNetworkWired />,
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
                className="text-center md:text-start lg:text-start text-2xl font-bold mb-4 text-amber-300"
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
                  <div
                    className="bg-amber-50 w-[200px] h-auto flex flex-col justify-center items-center gap-2 p-4 rounded-lg shadow-lg text-3xl font-bold text-amber-600
                     hover:bg-amber-100 duration-300 transition-transform ease-in-out hover:scale-95
                     border-b-4 border-a,ber-500 border-l-2 border-r-2 
                     "
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    <h1 className="text-xl">{items.name}</h1>
                    <h1 className="text-4xl">{items.icon}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        Skills
      </div>
    </>
  );
};

export default About;
