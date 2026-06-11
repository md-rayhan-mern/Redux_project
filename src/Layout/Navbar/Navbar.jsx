import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Settings,
  LogOut,
  ChevronDown,
  LayoutDashboard,
  Mail,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু স্টেট
  const [isProfileOpen, setIsProfileOpen] = useState(false); // প্রফাইল ড্রপডাউন স্টেট
  const [isLoggedIn, setIsLoggedIn] = useState(true); // লগইন স্টেট (টেস্ট করার জন্য true/false করুন)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "blog" },
    { name: "About Us", href: "about" },
    { name: "Contact Us", href: "contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* ১. বাম পাশে লোগো */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">LOGO</span>
          </div>

          {/* ২. মাঝখানে ডেক্সটপ মেনু */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600 font-medium"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* ৩. ডানপাশে লগইন/প্রফাইল সেকশন */}
          <div className="hidden md:flex items-center">
            {!isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 font-medium">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300">
                    <User size={20} className="text-gray-600" />
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* প্রফাইল ড্রপডাউন */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 animate-in fade-in zoom-in duration-150">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User size={16} className="mr-2" /> Profile
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings size={16} className="mr-2" /> Settings
                    </a>
                    <hr className="my-1" />
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={16} className="mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* মোবাইল মেনু বাটন */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল মেনু কন্টেন্ট */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            {!isLoggedIn ? (
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 font-medium text-gray-700">
                  Login
                </button>
                <button className="w-full bg-blue-600 text-white px-3 py-2 rounded-md font-medium">
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase">
                  Account
                </div>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-gray-700"
                >
                  <User size={18} className="mr-3" /> Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-gray-700"
                >
                  <Settings size={18} className="mr-3" /> Settings
                </a>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center px-3 py-2 text-red-600"
                >
                  <LogOut size={18} className="mr-3" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
