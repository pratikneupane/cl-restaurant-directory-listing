import React from "react";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";

const TopBar: React.FC = () => {
  return (
    <div className=" bg-transparent text-[#cccccc] py-2 px-20 flex justify-between items-center border-b border-solid border-white border-opacity-10">
      <div className=" flex items-center justify-center">
        <div className="flex items-between justify-between mr-4">
          <span className="flex items-center group hover:text-red-500  mr-5 transition-all ease-in-out duration-300">
            <LuPhone className="mr-2 text-lg text-[#7e7e7e] group-hover:text-red-500  transition-all ease-in-out duration-300" />
            <a href="tel:+123456789">+977-9876543210</a>
          </span>
          <span className="text-[#7e7e7e]"> • </span>
          <span className="flex items-center ml-4 mr-5 group hover:text-red-500 transition-all ease-in-out duration-300">
            <BsEnvelope className="text-lg mr-2 text-[#7e7e7e] group-hover:text-red-500 transition-all ease-in-out duration-300" />
            <a href="mailto:info@example.com">info@resturantlisting.com</a>
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-between">
        Follow us at:
        <span className=" ml-2 mr-2 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300">
          <FaFacebookF className="text-lg" />
        </span>
        <span className="mr-2 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300">
          <FaXTwitter className="text-lg" />
        </span>
        <span className="mr-2 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300">
          <FaInstagram className="text-lg" />
        </span>
        <span className="cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300">
          <FaPinterest className="text-lg" />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
