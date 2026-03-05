import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-32 md:w-36 rounded-full border border-gray-200 shadow-sm"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            className="text-gray-700 font-medium hover:text-blue-500 transition"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-700 font-medium hover:text-blue-500 transition"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="text-gray-700 font-medium hover:text-blue-500 transition"
            to="/grocery"
          >
            Grocery
          </Link>
          <span className="text-gray-700 font-medium">
            Online: {onlineStatus ? "✅" : "🚩"}
          </span>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 shadow-inner">
          <ul className="flex flex-col gap-4 px-4 py-3">
            <li>
              <Link
                className="text-gray-700 font-medium hover:text-blue-500 transition"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 font-medium hover:text-blue-500 transition"
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 font-medium hover:text-blue-500 transition"
                to="/grocery"
                onClick={() => setMenuOpen(false)}
              >
                Grocery
              </Link>
            </li>
            <li className="text-gray-700 font-medium">
              Online: {onlineStatus ? "✅" : "🚩"}
            </li>
            <li>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition w-full"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                  setMenuOpen(false);
                }}
              >
                {btnNameReact}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
