// components/Dropdown.tsx
import React, { ReactNode, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface DropdownProps {
  title: string;
  links: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="w-[80px] cursor-pointer relative group h-20 flex flex-col justify-center items-center before:w-full before:absolute before:bottom-0 before:right-[0] before:content-[''] before:h-[3px] before:bg-red-500 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:ease-in-out before:origin-top-right"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="font-bold focus:outline-none group-hover:text-red-500 flex items-center group-hover:transition-all group-hover:duration-500"
      >
        {title}
        <span className="ml-1">
          <MdOutlineKeyboardArrowDown className="text-xl group-hover:text-red-500 group-hover:rotate-180 group-hover:transition-all group-hover:duration-500" />
        </span>
      </button>
      <div
        className={`absolute top-full left-0 mt-1 scale-y-0 ${
          isOpen ? "scale-y-100" : "group-hover:scale-y-100"
        } group-hover:scale-y-100 group-hover:transition-all group-hover:duration-500 origin-top bg-white border text-black p-4 w-[200px] border-gray-300 divide-y divide-gray-200 shadow-md rounded-b-md`}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <div key={link} className="relative h-full w-full">
              <a
                href="#"
                className="py-1 hover:text-red-500 font-medium text-gray-700 before:absolute before:content-[''] before:-left-2 before:top-[20%] before:bottom-[50%] before:translate-x-[-50%] before:transalte-y-[-50%] before:w-[4px] before:h-[15px] before:bg-red-500 before:scale-0 brefore:rounded hover:before:scale-100 before:transition-all before:ease-in-out before:duration-500 transition-all ease-in-out duration-500"
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
