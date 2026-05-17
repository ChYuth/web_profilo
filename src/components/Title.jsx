import React from "react";
import { Link } from "react-router-dom";
import './title.css'
const Title = () => {
  const titles = [
    {
      subtitle: "Welcome to Portfolio",
      name: "Chork Rayuth",
      description:
        "a passionate web developer with a knack for creating stunning and functional websites. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in crafting responsive and user-friendly web applications.",
    },
  ];
  return (
    <>
      <div className="title-container ">
        {titles.map((title, index) => (
          <div
            key={index}
            className="w-[20rem] lg:w-[25rem] md:w-[20rem] mx-auto py-4 grid  shadow-lg rounded-3xl px-2 border-b-4 border-gray-200/30 bg-transparent  backdrop-blur-2xl"
          >
            <h2 className="text-2xl text-black font-bold mb-8 text-center
            ">
              {title.subtitle}
            </h2>
            <h1 className="text-3xl text-black font-bold anima 
             mb-4 text-center lg:text-4xl md:text-3xl sm:text-2xl ml-4">
              {title.name}
            </h1>
            <p className="text-gray-700 mt-4 text-center mb-8">
              {title.description}
            </p>
            <button type="button">
              <Link
                to="/about"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Learn More
              </Link>
            </button>
             <div 
         data-aos="fade-up">
           <Link  to={"https://github.com/ChYuth"} 
            target="_blank"   
            rel="noopener noreferrer"
            className="block mt-6 hover:opacity-80 transition text-center"
          >
            <code className="text-black text-lg  bg-zinc-200  px-4 py-2 rounded-lg border border-blue-100 underline ">
              https://github.com/ChYuth
            </code>
           </Link>
        </div>

          </div>
        ))}
         
      </div>
    </>
  )};

export default Title;