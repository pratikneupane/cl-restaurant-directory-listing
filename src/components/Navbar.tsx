// components/Navbar.tsx
import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { FaPlus, FaRegUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="text-white bg-transparent px-20 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="./images/logo.svg" alt="Logo" width={200} height={100} />
      </div>

      <div className="flex items-center space-x-10">
        <a
          href="#"
          className="font-bold w-[70px] cursor-pointer relative group  hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out h-20 flex flex-col justify-center items-center before:w-full before:absolute before:bottom-0 before:right-[0] before:content-[''] before:h-[3px] before:bg-red-500 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:ease-in-out before:origin-top-right"
        >
          Home
        </a>
        <a
          href="#"
          className="font-bold w-[70px] cursor-pointer relative group  hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out h-20 flex flex-col justify-center items-center before:w-full before:absolute before:bottom-0 before:right-[0] before:content-[''] before:h-[3px] before:bg-red-500 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:ease-in-out before:origin-top-right"
        >
          Explore
        </a>

        <Dropdown
          title="Pages"
          links={["About Us", "Testimonials", "FAQ", "404"]}
        />

        <a
          href="#"
          className="font-bold w-[70px] cursor-pointer relative group  hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out h-20 flex flex-col justify-center items-center before:w-full before:absolute before:bottom-0 before:right-[0] before:content-[''] before:h-[3px] before:bg-red-500 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:ease-in-out before:origin-top-right"
        >
          Blog
        </a>

        <a
          href="#"
          className="font-bold w-[70px] cursor-pointer relative group  hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out h-20 flex flex-col justify-center items-center before:w-full before:absolute before:bottom-0 before:right-[0] before:content-[''] before:h-[3px] before:bg-red-500 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:ease-in-out before:origin-top-right"
        >
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="font-bold w-[130px] group cursor-pointer relative group h-20 flex justify-center items-center hover:color-red-500"
        >
          <FaRegUser className="mr-2 text-[#fff] group-hover:text-red-500 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out" />{" "}
          <span className="text-[#fff] group-hover:text-red-500 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
            My Account
          </span>
        </a>

        <button className="bg-red-500 text-white py-2 px-4 flex items-center justify-center rounded-full">
          Add Restaurant
          <FaPlus className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
