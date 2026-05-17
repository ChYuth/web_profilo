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

  return (
    < >
<div className="scroll-smooth">
      <div className="w-full mt-30 mx-auto p-8 h-full flex flex-col justify-center items-center">
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
            className="text-lg text-gray-700 text-center md:text-start lg:text-start mb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            I am a passionate web developer with a love for creating beautiful
            and functional websites. With a strong background in HTML, CSS, and
            JavaScript, I enjoy bringing ideas to life through code. I am always
            eager to learn new technologies and stay up-to-date with the latest
            trends in web development.
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
              <p className="text-2xl lg:text-4xl  font-semibold ">1+ Years</p>
              <span className="text-sm lg:text-lg ">Teaching computer</span>
            </div>

            <div
              className=" w-full p-2 bg-transparent text-2xl text-amber-50 text-center rounded-3xl h-30 shadow-md flex flex-col justify-center items-center gap-2 border-b-2 border-amber-500 py-b-4 hover:rotate-[10deg] transition-transform duration-300 ease-in-out border-b-2"
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
                2+{" "}
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
  <div className="w-full h-auto max-w-full flex justify-center  mt-[-25px]  "
  >
      <div className="w-full lg:w-1/3 bg-transparent shadow-xl p-2 rounded-3xl border-b-4 border-gray-50 backdrop-blur-2xl flex flex-col justify-center cursor-pointer "
       data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="700">
        <div className="w-full flex h-12 justify-center items-center text-center mt-2"
         data-aos="fade-up"
         data-aos-duration="600"
         data-aos-delay="100">
          <h1 className="bg-blue-500 p-4 rounded-t-2xl rounded-b-lg font-semibold shadow-md text-amber-100 mb-16 "> Program Language</h1>
        </div>
        <div className=" w-full h-full flex flex-wrap justify-center  gap-4 p-2  mb-2">
          <div className="bg-amber-50 w-[200px] h-auto flex flex-col justify-center items-center gap-2 p-4 rounded-lg shadow-md text-3xl font-bold text-amber-600 hover:bg-amber-100 duration-300 transition-transform ease-in-out hover:scale-95"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          >
            <h1>HTML</h1>
            <h1>
              <FaHtml5 />
            </h1>

          </div>
          <div className="bg-amber-50 w-[200px] h-auto flex flex-col justify-center items-center gap-2 p-4 rounded-lg shadow-md text-3xl font-bold text-amber-600 hover:bg-amber-100 duration-300 transition-transform ease-in-out hover:scale-95"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          >
            <h1>CSS</h1>
            <h1>
              <FaCss3Alt />
            </h1>
          </div>
          <div className="bg-amber-50 w-[200px] h-auto flex flex-col justify-center items-center gap-2 p-4 rounded-lg shadow-md text-3xl font-bold text-amber-600 hover:bg-amber-100 duration-300 transition-transform ease-in-out hover:scale-95"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          >
            <h1>JavaScript</h1>
            <h1>
              <BsJavascript />
            </h1>
          </div>
          <div className="bg-amber-50 w-[200px] h-auto flex flex-col justify-center items-center gap-2 p-4 rounded-lg shadow-md text-3xl font-bold text-amber-600 hover:bg-amber-100 duration-300 transition-transform ease-in-out hover:scale-95"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          >
            <h1>React</h1>
            <h1>
              <FaReact />
            </h1>
          </div>
          <div className="bg-amber-50 w-[200px] h-auto flex flex-col justify-center items-center gap-2 p-4 rounded-lg shadow-md text-3xl font-bold text-amber-600 hover:bg-amber-100 duration-300 transition-transform ease-in-out hover:scale-95"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          >
            <h1>Taiwind</h1>
            <h1>
              <RiTailwindCssFill />
            </h1>
          </div>
          <div className="bg-amber-50 w-[200px] h-auto flex flex-col justify-center items-center gap-2 p-4 rounded-lg shadow-md text-3xl font-bold text-amber-600 hover:bg-amber-100 duration-300 transition-transform ease-in-out hover:scale-95"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          >
            <h1>C++</h1>
            <h1>
              <TbBrandCpp />
            </h1>
          </div>
        </div>
      </div>
  </div>
 
</div>

    </>
  );
};

export default About;