import React, { useState } from "react";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Register = ({setopenmodal}) => {
  const [showpassword, setshowpassword] = useState(false);
  const [showcfpassword, setcfshowpassword] = useState(false);
  // message
  const [message, setmessage] = useState("");
  // logic test password and comfirm password
  const [password, setpassword] = useState("");
  const [cfpassword, setcfpassword] = useState("");
  const handlechange = (e) => {
    const value = e.target.value;
    setcfpassword(value);

    if (value.length === 0) {
      setmessage("");
    } else if (password !== value) {
      setmessage("Comfirm Passwords do not match");
    } else {
      setmessage("Comfirm Passwords match ✅");
    }
  };
  

  return (
    <>
      <div className=" w-full rounded-xl shadow-xl h-full  ">
        <div className="max-w-xl  m-auto h-auto bg-zinc-100 shadow-xl rounded-4xl flex justify-center items-cente flex-col p-2 gap-2 border-b-6 border-r-2 border-l-2 border-amber-500 overflow-y-auto"
        data-aos   data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >
          {/* caption and button */}
          <div className="w-full p-4 flex justify-between text-sm font-semibold text-blue-500">
            <div className=" hover:text-blue-700 cursor-pointer">
              <p>Register</p>
            </div>
            {/* Close button */}
            <div>
              <button
                type="button"
                onClick={() => setopenmodal(false)}
                
                className=" hover:text-blue-700 cursor-pointer"
              >
                <MdOutlineFullscreenExit size={25} />
              </button>
            </div>
          </div>
          {/* header */}
          <div className="w-full flex items-center justify-center ">
            <h1 className="text-center text-2xl font-bold text-sky-800 border-b-2 border-zinc-400 py-4 rounded-2xl w-sm hover:bg-amber-200 hover:scale-102 duration-300">
              Create Account Login
            </h1>
          </div>
          {/* <hr className="bg-gray-200 h-[2px] rounded-xl border-none" /> */}
          {/* Form */}
          <div>
            <form action="#">
              {/*  Name */}
              <div className="flex flex-col gap-1 mb-2 w-full px-8 m-auto">
                <label htmlFor="UserName">Name</label>
                <input
                  type="text"
                  id="UserName"
                  name="UserName"
                  className="bg-zinc-200 border-b-2  border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-b-2 focus:border-blue-500 "
                  placeholder="Input your name"
                  required
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-1 mb-2 w-full m-auto px-8">
                <label htmlFor="UserEmail">Email</label>
                <input
                  type="email"
                  id="UserEmail"
                  name="UserEmail"
                  className="bg-zinc-200 border-b-2  border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-b-2 focus:border-blue-500 "
                  placeholder="Input your email"
                  required
                />
              </div>
              {/* password and Comfirm Password */}
              <div className="container grid place-items-center w-full">
                <div className="w-full px-8 max-w-full flex flex-col lg:flex-row md:flex-row gap-4 h-auto">
                  {/* Password */}
                  <div className="flex flex-col gap-1 mb-4 m-auto w-full">
                    <label htmlFor="UserPassword">Password</label>
                    <div className="w-full relative">
                      <input
                        type={showpassword ? "text" : "password"}
                        id="UserPassword"
                        name="UserPassword"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 pr-10 focus:outline-none focus:border-blue-500"
                        placeholder=" ......"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setshowpassword(!showpassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                      >
                        {showpassword ? <IoEyeSharp /> : <FaEyeSlash />}
                      </button>
                    </div>
                  </div>
                  {/* Confirm Password */}
                  <div className="flex flex-col gap-1 mb-2 w-full m-auto">
                    <label htmlFor="UserConfirmPassword">
                      Confirm Password
                    </label>

                    <div className="w-full relative">
                      <input
                        //  value="UserConfirmPassword"
                        type={showcfpassword ? "text" : "password"}
                        id="UserConfirmPassword"
                        name="UserConfirmPassword"
                        value={cfpassword}
                        onChange={handlechange}
                        className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 pr-10 focus:outline-none focus:border-blue-500"
                        placeholder="......"
                        required
                      />

                      <button
                        type="button"
                        onClick={() => setcfshowpassword(!showcfpassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                      >
                        {showcfpassword ? <IoEyeSharp /> : <FaEyeSlash />}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-2 px-3  rounded-lg text-sm transition-all duration-300 w-full textt-center ${
                    password == `` && cfpassword == ``
                      ? "bg-white"
                      : password === cfpassword
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  }`}
                >
                  {message}
                </div>
              </div>
              <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-center w-full mt-2 gap-2">
                {/* phone Number */}
                <div className="w-full px-8">
                  <label htmlFor="Phone">Phone Number</label>
                  <input
                    type="tele"
                    id="Phone"
                    placeholder="+855 00 000 000"
                    className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 pr-10 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* date of birth */}
                <div className="w-full px-8">
                  <label htmlFor="dob">Date Of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    className="bg-zinc-200 border-b-2 border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2 pr-10 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
             <div className="w-full flex justify-center mt-2 mb-2">
                   <button type="button"
                  //  onChange={}
                    className="bg-blue-500 py-2.5 px-2 rounded-xl m-auto text-zinc-50 hover:bg-blue-600 ">
                    Create Account
                  </button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
