
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "text-indigo-600 font-semibold";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-indigo-700 tracking-wide">
          AI Blog
        </Link>

        <nav className="hidden md:flex space-x-10 text-gray-700 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : "hover:text-indigo-600 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? activeClass : "hover:text-indigo-600 transition"
            }
          >
            Posts
          </NavLink>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-inner px-6 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? activeClass : "block text-gray-700 font-medium hover:text-indigo-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? activeClass : "block text-gray-700 font-medium hover:text-indigo-600"
            }
          >
            Posts
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;