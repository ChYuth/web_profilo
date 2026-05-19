import { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const content = [
  {
    id: 1,
    menu: "Home",
    icon: <FaHome />,
    link: "/dashboard/homes",
  },
  {
    id: 2,
    menu: "About",
    icon: <FaUser />,
    link: "/dashboard/abouts",
  },
  {
    id: 3,
    menu: "Contact",
    icon: <FaProjectDiagram />,
    link: "/dashboard/contacts",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`${
        open ? "w-[220px]" : "w-[80px]"
      } shrink-0 bg-gray-900 text-white  duration-300 ease-in-out min-h-[calc(100vh-56px)] p-4 rounded-xl`}
    >
      <div className="flex items-center justify-between mb-10">
        <h1 className={`text-xl font-bold whitespace-nowrap ${!open ? "hidden" : ""}`}>
          Dashboard
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-700 px-3 py-1 rounded"
          type="button"
        >
          {open ? "X" : "="}
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {content.map((item) => (
          <li
            className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer duration-200"
            key={item.id}
          >
            <Link to={item.link} className="flex items-center gap-4">
              <span className="text-lg leading-none">{item.icon}</span>
              <span className={`${!open ? "hidden" : ""} whitespace-nowrap`}>
                {item.menu}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
