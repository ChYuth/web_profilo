import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import Picture from "../assets/img/ChorkRayuth.jpg";
import Register from '/src/components/Register.jsx'
import Aos from "aos";
const Login = () => {
  const [openmodal,setopenmodal] = useState(false);
  return (
    <>
      <div className=" w-full max-w-full h-full lg:h-172 md:h-172 flex flex-wrap gap-8 justify-center items-center  mb-4 py-2 ">
        <div className="max-w-full h-full flex flex-wrap gap-8 justify-center items-center mb-4 py-2 bg-transparent border-b-4 border-l-2 border-r-2 border-gray-200 backdrop-blur-2xl rounded-4xl shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        > 
        <div className="max-w-2xl h-104 p-2.5 flex flex-col mb-8 justify-center items-center rounded-4xl text-zinc-800  bg-zinc-50 border-b-6 border-zinc-500 border-t-8"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <img
            src={Picture}
            alt="Profile"
            className="w-64 h-64 rounded-xl object-contain mb-4 mt-4"
          />
          <h1 className="text-xl font-extrabold text-center xl:text-start lg:text-start md:text-center sm:text-center">
            Welcome to Login Page
          </h1>
          <p className="text-md text-center  py-2">
            Please enter your credentials to access your account.
          </p>
          
        </div>
        {/* Form login */}
        <div className="w-[400px] lg:max-w-lg h-104 p-2 mt-[-50px]"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <form
            action="#"
            className="w-full lg:w-full mt-[-10px] lg:mt-0 shadow-lg p-2 bg-amber-50 rounded-4xl border-b-6 border-amber-300 border-t-8 border-l-2 border-r-2 h-auto"
          >
            {/* header */}
            <div className="w-full mb-6 text-4xl text-center font-bold text-gray-800">
              <h1 className="text-3xl font-extrabold">Login</h1>
            </div>
            {/* email */}
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0 focus:outline-blue-400 focus:outline-2"
                placeholder="Input your email"
                required
              />
            </div>
            {/* password */}
            <div className="w-full mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0 focus:outline-blue-400 focus:outline-2"
                placeholder="Input your password"
                required
              />
            </div>
            <div className="flex flex-wrap  items-center justify-center md:justify-between lg:justify-between mb-4 text-lg">
              <div className="flex ">
                <div className="flex items-center justify-between h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:outline-none focus:ring-blue-300"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Link
                  to="/forgot-password"
                  className="ml-2 text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            {/* submit */}
            <div className="w-3/4 mb-4 m-auto">
              <button
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login to your account
              </button>
            </div>
            {/* Icon */}
            <div className="flex justify-center gap-4 mt-4 text-2xl">
              <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
              <FaGithub className="text-gray-800 hover:text-gray-900 cursor-pointer" />
              <FcGoogle className="text-red-500 hover:text-red-700 cursor-pointer" />
              <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
            </div>
            <div className="w-full flex justify-center">
              <p className="text-sm font-light text-gray-500 mt-4 text-center">
                Don't have an account?{" "}
                <Link
                  // to="/register"
                  className="font-medium text-blue-600 hover:underline"
                  onClick={
                    () => {
                      setopenmodal(true);
                    }
                  }
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
        </div>
          {
            openmodal && (
              <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
                <div className="mt-46 ">
                  <Register setopenmodal={setopenmodal} />
                </div>
              </div>
            )
          }
        </div>
    </>
  );
};

export default Login;
