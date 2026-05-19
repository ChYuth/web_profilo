import React, { useState } from "react";
import { Link } from "react-router-dom";
import Picture from "../assets/img/ChorkRayuth.jpg";
const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen  flex flex-col justify-between scroll-auto">
      <header className="">
          <nav className="bg-gray-800 fixed w-full z-20 top-0 border-b border-gray-700 text-amber-50 font-bold"
      data-aos="fade-down">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={Picture}
              className="h-7"
              alt="logo"
            />
            <span className="text-xl font-semibold text-white">
              CHORK RAYUTH
            </span>
          </Link>

          {/* Right side + Toggle */}
          <div className="flex items-center gap-3 md:order-2">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={Picture}
              alt="user"
            />
            {/* <button className="text-sm px-4 py-2 rounded bg-blue-500 text-white">
              <Link to="/login">Login</Link>
            </button> */}

            {/* ✅ Toggle button — visible only on mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-expanded={open}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger / X icon */}
              {open ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* ✅ Menu — hidden on mobile unless open, always visible on md+ */}
          <div className={`${open ? "block" : "hidden"} w-full md:block md:w-auto md:order-1`}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link to="/" className="block py-2 px-3 text-white hover:text-blue-400 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-3 text-white hover:text-blue-400 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-white hover:text-blue-400 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      </header>
    <main className="flex-1 mt-14 w-full p-4 relative z-10 overflow-auto"> {/* ✅ flex-1 */}
    {children}
  </main>

      <footer 
      data-aos="fade-up"
      style={{ background: "#1a1a2e", color: "#aaa", textAlign: "center", padding: "20px" }}
      >
        <p>© 2025 MyShop. រក្សាសិទ្ធិទាំងអស់។</p>
      </footer>

    </div>
  );
};

export default MainLayout;