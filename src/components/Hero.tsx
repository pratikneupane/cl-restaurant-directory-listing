import React from "react";
import CustomLocationSelect from "./CustomLocationSelect";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70%] text-white">
      <h1 className="text-5xl font-medium tracking-wider mb-6 text-center mx-auto flex flex-col gap-2">
        Discover and Book the
        <span>
          Best
          <span className="font-black relative ml-2">
            Restaurant
            <img
              className="absolute w-full h-full -bottom-5 left-0"
              src="./images/curve.svg"
              alt="line"
            />
          </span>
        </span>
      </h1>

      <div className="flex items-between space-x-0 my-8 bg-white rounded-lg w-[29%] text-3xl">
        <input
          type="text"
          placeholder="Restaurant or Cuisine"
          className="p-2 rounded-l-md text-xl text-black w-[100%] focus:outline-none bg-transparent border-0"
        />

        <CustomLocationSelect />

        <button className="p-2 bg-red-500 text-xl text-white rounded-r-md hover:bg-red-600 focus:outline-none">
          Search
        </button>
      </div>

      <div className="flex">
        <p className="mr-2 font-semibold">Popular:</p>
        <ul className="flex space-x-4">
          <li className="hover:text-red-500 cursor-pointer transition-all duration-500 ease-in-out">
            Apple Juice
          </li>
          <li className="hover:text-red-500 cursor-pointer transition-all duration-500 ease-in-out">
            Fastfood
          </li>
          <li className="hover:text-red-500 cursor-pointer transition-all duration-500 ease-in-out">
            Ice Cream
          </li>
          <li className="hover:text-red-500 cursor-pointer transition-all duration-500 ease-in-out">
            Sandwich
          </li>
          {/* Add more popular items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
