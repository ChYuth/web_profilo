import React, { useState } from "react";

// icons
import { MdOutlineFullscreenExit } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Register = ({ setopenmodal }) => {

  // show hide password
  const [showpassword, setshowpassword] = useState(false);
  const [showcfpassword, setcfshowpassword] = useState(false);

  // password states
  const [password, setpassword] = useState("");
  const [cfpassword, setcfpassword] = useState("");

  // message
  const [message, setmessage] = useState("");

  // confirm password logic
  const handlechange = (e) => {
    const value = e.target.value;

    setcfpassword(value);

    if (value.length === 0) {
      setmessage("");
    } else if (password !== value) {
      setmessage("Confirm Passwords do not match");
    } else {
      setmessage("Confirm Passwords match ✅");
    }
  };

  return (
    <>
      {/* Main Container */}
      <div className="w-full min-h-screen p-2 sm:p-4">

        {/* Card Container */}
        <div
          className="w-full max-w-xl mx-auto"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >

          {/* Form */}
          <form
            action="#"
            className="bg-zinc-100 shadow-xl rounded-3xl flex flex-col p-4 sm:p-6 gap-3 border-b-4 border-r-2 border-l-2 border-amber-500 max-h-[90vh] overflow-y-auto"
          >

            {/* Header */}
            <div className="w-full p-2 flex justify-between items-center text-sm font-semibold text-blue-500">

              <div className="hover:text-blue-700 cursor-pointer">
                <p>Register</p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setopenmodal(false)}
                className="hover:text-blue-700 cursor-pointer"
              >
                <MdOutlineFullscreenExit size={25} />
              </button>
            </div>

            {/* Title */}
            <div className="w-full flex items-center justify-center">
              <h1 className="text-center text-xl sm:text-2xl font-bold text-sky-800 border-b-2 border-zinc-400 py-2 rounded-2xl w-full max-w-sm hover:bg-amber-200 duration-300">
                Create Account Login
              </h1>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1 mb-2 w-full px-4 sm:px-8">
              <label htmlFor="UserName">
                Name
              </label>

              <input
                type="text"
                id="UserName"
                name="UserName"
                placeholder="Input your name"
                required
                className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 mb-2 w-full px-4 sm:px-8">
              <label htmlFor="UserEmail">
                Email
              </label>

              <input
                type="email"
                id="UserEmail"
                name="UserEmail"
                placeholder="Input your email"
                required
                className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Section */}
            <div className="container grid place-items-center w-full">

              <div className="w-full px-4 sm:px-8 flex flex-col md:flex-row gap-4">

                {/* Password */}
                <div className="flex flex-col gap-1 mb-2 w-full">

                  <label htmlFor="UserPassword">
                    Password
                  </label>

                  <div className="w-full relative">

                    <input
                      type={showpassword ? "text" : "password"}
                      id="UserPassword"
                      name="UserPassword"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="******"
                      required
                      className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 pr-10 focus:outline-none focus:border-blue-500"
                    />

                    {/* Show Hide Password */}
                    <button
                      type="button"
                      onClick={() => setshowpassword(!showpassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                    >
                      {showpassword
                        ? <IoEyeSharp />
                        : <FaEyeSlash />
                      }
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1 mb-2 w-full">

                  <label htmlFor="UserConfirmPassword">
                    Confirm Password
                  </label>

                  <div className="w-full relative">

                    <input
                      type={showcfpassword ? "text" : "password"}
                      id="UserConfirmPassword"
                      name="UserConfirmPassword"
                      value={cfpassword}
                      onChange={handlechange}
                      placeholder="******"
                      required
                      className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 pr-10 focus:outline-none focus:border-blue-500"
                    />

                    {/* Show Hide Confirm Password */}
                    <button
                      type="button"
                      onClick={() =>
                        setcfshowpassword(!showcfpassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                    >
                      {showcfpassword
                        ? <IoEyeSharp />
                        : <FaEyeSlash />
                      }
                    </button>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div
                className={`mt-2 px-4 py-2 rounded-lg text-sm transition-all duration-300 w-full text-center ${
                  password === "" && cfpassword === ""
                    ? "bg-white"
                    : password === cfpassword
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                {message}
              </div>
            </div>

            {/* Phone + Date */}
            <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center w-full mt-2 gap-4">

              {/* Phone */}
              <div className="w-full px-4 sm:px-8">
                <label htmlFor="Phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="Phone"
                  placeholder="+855 00 000 000"
                  className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Date Of Birth */}
              <div className="w-full px-4 sm:px-8">
                <label htmlFor="dob">
                  Date Of Birth
                </label>

                <input
                  type="date"
                  id="dob"
                  className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center mt-4 mb-2 px-4">

              <button
                type="button"
                className="bg-blue-500 py-2.5 px-6 rounded-xl text-white hover:bg-blue-600 w-full sm:w-auto"
              >
                Create Account
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;