import { useClickAwayListener } from "@/hooks/useClickAwayListener";
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Location {
  value: string;
  label: string;
}

const nepalLocations: Location[] = [
  { value: "kathmandu", label: "Kathmandu" },
  { value: "pokhara", label: "Pokhara" },
  { value: "lalitpur", label: "Lalitpur" },
  { value: "biratnagar", label: "Biratnagar" },
  { value: "bharatpur", label: "Bharatpur" },
  { value: "birgunj", label: "Birgunj" },
  { value: "butwal", label: "Butwal" },
  { value: "dharan", label: "Dharan" },
];

const CustomLocationSelect: React.FC = () => {
  const { isNodeVisible, nodeRef, setIsNodeVisible } = useClickAwayListener();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isNodeVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNodeVisible]);

  const handleLocationChange = (location: Location) => {
    setSelectedLocation(location);
    setIsNodeVisible(false);
  };

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-full">
      <div
        className={`p-2 focus:outline-none text-lg flex bg-transparent border-0 items-center justify-start ${
          selectedLocation ? "text-black" : "text-gray-400"
        } cursor-pointer`}
        ref={nodeRef}
        onClick={() => {
          setIsNodeVisible((prev) => !prev);
        }}
      >
        <FaMapMarkerAlt className="text-red-500 mr-2" />
        {selectedLocation ? selectedLocation.label : "Select Location"}
      </div>
      {isNodeVisible ? (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded shadow-md">
          <input
            ref={inputRef}
            type="text"
            className="p-2 w-full border-b border-gray-300 text-black focus:outline-none text-lg"
            placeholder="Search location"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <ul className="max-h-48 overflow-y-auto scrollbar-thumb-red-500 scrollbar-track-red-200 scrollbar-thumb-rounded-full">
            {nepalLocations
              .filter((location) =>
                location.label.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .slice(0, 5)
              .map((location) => (
                <li
                  key={location.value}
                  className="p-2 cursor-pointer hover:bg-red-500 text-black text-lg"
                  onClick={() => handleLocationChange(location)}
                >
                  {location.label}
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default CustomLocationSelect;
