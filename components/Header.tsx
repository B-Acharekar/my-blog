'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { FiUser } from 'react-icons/fi';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          My<span className="text-lime-400">Blogs</span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center gap-6 text-base font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-lime-400 transition-colors">Blogs</Link>
          <Link href="/projects" className="hover:text-lime-400 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-lime-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-lime-400 transition-colors">Contact</Link>
        </nav>

        <div className="relative" ref={dropdownRef}>
          {!isLoggedIn ? (
            <>
              <Link
                href="/sign-in"
                className="text-lime-400 font-semibold hover:text-lime-900 hover:text-lg hover:underline-offset-2 transition-colors mr-4"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="text-lime-400 font-semibold hover:text-lime-900 hover:text-lg hover:underline-offset-2 transition-colors"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-lime-400 hover:text-lime-900 transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                title="User menu"
              >
                <FiUser size={28} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                  {/* Example Profile link */}
                  {/* <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-lime-400 hover:text-white transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link> */}

                  {/* Logout button */}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-lime-400 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
