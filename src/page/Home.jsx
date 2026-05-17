import { useEffect } from "react";
import { Link } from "react-router-dom";
import Picture from "../components/Picture";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/title.css";

const Home = () => {
  // 3. This tells the animations to start
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto py-20 min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6">
      {/* TEXT SECTION */}
      <div data-aos="fade-right" className="flex-1">
        <Title />
      </div>

      {/* PICTURE SECTION */}
      <div data-aos="fade-left" className="flex-1 flex justify-center">
        <Picture />
      </div>
       
    </div>
  );
};

export default Home;
