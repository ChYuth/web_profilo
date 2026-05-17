import React, { useEffect, useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  // --- ONLY ADDING THESE STATES ---
  const [userText, setUserText] = useState(""); 
  const [feedback, setFeedback] = useState({ text: "", color: "", bg: "" });

  // --- THE LOGIC FUNCTION ---
  const handleSend = () => {
    if (userText.trim() === "") {
      setFeedback({
        text: "Please enter a message before sending.",
        color: "red",
        bg: "pink",
        delay: 3000, // Auto-clear after 3 seconds
      });
    } else {
      setFeedback({
        text: "Your message has been sent successfully!",
        color: "green",
        bg: "lightgreen",
        delay: 3000, // Auto-clear after 3 seconds
      });
      setUserText(""); // Clear text after sending
    }
  };
  setTimeout(() => {
    if (feedback.text) {
      setFeedback({ text: "", color: "", bg: "" }); // Clear feedback after delay
    }
  }, 4000);

  const relate = [
    { name: "PHONE NUMBER", value: "+855 78724466" },
    { name: "Telegram", value: "@CHORKrayuth2" },
    { name: "Email Address", value: "rayuth4466@gmail.com" },
    { name: "Github", value: "https://github.com/ChYuth" },
    { name: "Facebook", value: "ចៅ យុទ្ធ" }
  ];

  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-gray-50 mt-6 sm:mt-0" data-aos="fade-up">
        <div className="container py-2 mt-2 h-auto ">
          <div className="w-full flex justify-center items-center mb-4">
            <h1 className="text-3xl font-bold text-center bg-amber-50 w-64 p-2 rounded-2xl shadow-xl border-b-4 border-gray-300">
              Contact Us
            </h1>
          </div>
          
          <div className="w-full mb-4">
            <ul className="w-full flex flex-wrap justify-center gap-6">
              {relate.map((item, index) => (
                <li key={index} data-aos="fade-down" data-aos-delay={index * 100}
                  className="bg-amber-50 shadow-xl border-b-2 border-r-2 border-l-2 border-amber-500 w-74 h-50 p-2 rounded-3xl text-center hover:-translate-y-2 duration-400 cursor-pointer transition-transform"
                >
                  <div>
                    <h2 className="w-full hover:bg-amber-500 hover:text-white duration-300 font-bold text-green-900 mt-2 py-2 border-b-2 border-gray-300 rounded-2xl shadow-xl ">
                      {item.name}
                    </h2>
                    <h4 className="underline text-zinc-400 hover:text-black">This is a {item.name.toLowerCase()}</h4>
                    <p className="mt-4 text-lg bg-gray-900 rounded-2xl text-white py-2 ">
                      <span className="bg-zinc-900 px-4 rounded-xl hover:text-green-500 duration-300">{item.value}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="container flex justify-center items-center">
            <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="500">
              <h1 className="text-2xl font-bold text-center mt-4">If you have any questions, please feel free to contact us.</h1>
              <p className="text-center mt-2 text-lg">We look forward to hearing from you!</p>
              
              <div data-aos="fade-up" data-aos-delay="800">
                <form className="bg-gray-100 shadow-xl px-4 pt-2 pb-4 mb-2 mt-2 rounded-2xl border-b-2 border-amber-300">
                  <div className="mb-4">
                    <label htmlFor="text">Your Message</label>
                    {/* UPDATED TEXTAREA */}
                    <textarea
                      id="text"
                      className="shadow rounded w-full py-2 px-3 text-gray-700 border-b-2 border-r-2 border-l-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 "
                      rows="7"
                      value={userText}
                      onChange={(e) => setUserText(e.target.value)}
                    ></textarea>
                  </div>

                  <button 
                    type="button" 
                    onClick={handleSend} // UPDATED BUTTON
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Send Message
                  </button>

                  {/* FEEDBACK MESSAGE BOX */}
                  {feedback.text && (
                    <div 
                      className="mt-4 p-4 rounded-xl text-lg italic transition-all"
                      style={{ color: feedback.color, backgroundColor: feedback.bg }}
                    >
                      {feedback.text}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;