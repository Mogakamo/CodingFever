import Link from "next/link";
import React from "react";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="h-16 w-auto shadow-md flex items-center md:px-28 justify-between px-4">
      {/* Logo */}
      <div>
        <h1 className="md:text-6xl text-4xl font-bold text-purple-900">cF</h1>
      </div>
      <div className="hidden md:inline md:flex justify-between items-center space-x-20">
        {/* Quick links */}
        <div>
          <ul className="flex space-x-10 text-lg font-semibold opacity-80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="rounded-full bg-purple-800 text-white px-6 py-2">
            Get Started
          </button>
        </div>
      </div>
      {/* Menu Icon */}
      <div className="md:hidden lg:hidden">
        <HiMenu className="h-10 w-10" />
      </div>
    </div>
  );
};

export default NavBar;
