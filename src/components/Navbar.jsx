import React, { useState } from "react";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex absolute w-full text-white justify-between items-center h-20 px-4">
      <div>
        <h1 onClick={handleOpen} className={isOpen ? "hidden" : "block"}>
          BEACHES
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>

      <div className="hidden md:flex gap-7">
        <BsFillPersonFill size={20} className="cursor-pointer" />
        <BsSearch size={20} className="cursor-pointer" />
      </div>

      <div onClick={handleOpen} className="md:hidden z-10">
        {isOpen ? (
          <AiOutlineClose size={20} className="cursor-pointer text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          isOpen
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "hidden"
        }
      >
        <h1>BEACHES</h1>
        <ul className="flex flex-col">
          <li className="border-b border-black">Home</li>
          <li className="border-b border-black">Destination</li>
          <li className="border-b border-black">Travel</li>
          <li className="border-b border-black">View</li>
          <li>Book</li>
          <div className="flex flex-col gap-4">
            <button>Search</button>
            <button>Account</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
