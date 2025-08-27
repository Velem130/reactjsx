import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">VELEM</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
