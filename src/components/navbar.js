

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faShoppingBag, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import AdminDashboard from './AdminDashboard';

const Navbar = () => {
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);

  return (
    <>
      <nav className="w-full shadow-sm px-6 py-3 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faBars}
            className="text-gray-700 text-xl cursor-pointer hover:text-pink-500 md:hidden"
          />
          <img
            src="/glamics.png"
            alt="logo"
            className="h-8 w-30"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-4 py-2 w-1/2 max-w-lg">
          <select className="outline-none bg-transparent text-gray-600 text-sm pr-2">
            <option>Select Category</option>
            <option>Women</option>
            <option>Men</option>
            <option>Kids</option>
          </select>
          <input
            type="text"
            placeholder="Search Here"
            className="flex-grow outline-none px-2 text-gray-700 text-sm"
          />
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 cursor-pointer" />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/home" className="hover:text-red-600">HOME</a>
          <a href="/shop" className="hover:text-red-600">SHOP</a>
          <a href="/women" className="hover:text-red-600">WOMEN</a>
          <a href="/mens" className="hover:text-red-600">MEN'S</a>
          <a href="/kids" className="hover:text-red-600">KIDS</a>
          <a href="/blog" className="hover:text-red-600">BLOG</a>
          <a href="/pages" className="hover:text-red-600">PAGES</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-gray-700 text-lg ml-4">
          <FontAwesomeIcon 
            icon={faUser} 
            className="cursor-pointer hover:text-pink-500" 
            onClick={() => setShowAdminDashboard(!showAdminDashboard)}
          />
          <FontAwesomeIcon icon={faHeart} className="cursor-pointer hover:text-pink-500" />
          <FontAwesomeIcon icon={faShoppingBag} className="cursor-pointer hover:text-pink-500" />
        </div>
      </nav>
      {showAdminDashboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full h-full max-w-7xl max-h-[90vh] overflow-auto relative">
            <button 
              onClick={() => setShowAdminDashboard(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
            >
              ×
            </button>
            <AdminDashboard />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
