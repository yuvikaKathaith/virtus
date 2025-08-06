import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 relative sm:shadow-sm lg:shadow-none">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-32 sm:w-40 h-auto" />

        <ul className="hidden md:flex space-x-6 text-[#012349] font-medium text-lg lg:text-[17px]">
          <li><a href="#about" className="hover:text-[#041931]">About</a></li>
          <li><a href="#agenda" className="hover:text-[#041931]">Agenda</a></li>
          <li><a href="#volunteer" className="hover:text-[#041931]">Volunteer</a></li>
          <li><a href="#donate" className="hover:text-[#041931]">Donate</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-[#002c5b] text-white px-5 py-2 rounded-full text-md hover:opacity-90 transition">
            Donate now
          </button>
          <a href="#login" className="text-[#002c5b] font-medium text-md">Log in</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 space-y-4 text-[#002c5b] font-medium">
          <a href="#about" className="block">About</a>
          <a href="#agenda" className="block">Agenda</a>
          <a href="#volunteer" className="block">Volunteer</a>
          <a href="#donate" className="block">Donate</a>
          <button className="w-full bg-[#002c5b] text-white px-5 py-2 rounded-full text-md">
            Donate now
          </button>
          <a href="#login" className="block text-center">Log in</a>
        </div>
      )}
    </nav>
  );
}
