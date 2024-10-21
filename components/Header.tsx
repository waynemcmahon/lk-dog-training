'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            LK Dog Training
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="/courses" className="text-gray-600 hover:text-blue-600">Online Courses</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link href="/booking" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Book Now</Link>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="/courses" className="text-gray-600 hover:text-blue-600">Online Courses</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link href="/booking" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">Book Now</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;