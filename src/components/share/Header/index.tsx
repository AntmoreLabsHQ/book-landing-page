import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHome,
  faUsers,
  faQuestionCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/NavBar.css";
import Button from "../../base/Button";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolling(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0  z-50 w-full  transition-all duration-300 ${
        scrolling ? "backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 lg:px-8  ">
        <div className="flex justify-between items-center h-16  ">
          {/* Logo */}
          <div className={`flex items-center `}>
            <a
              href="/"
              className="text-white text-2xl font-bold hover:text-indigo-400"
            >
              MoneyMafia
            </a>
          </div>

          {/* Menu Icon (Mobile) */}
          <div className="md:hidden absolute right-5">
            <Button
              onClick={toggleMenu}
              startIcon={<FontAwesomeIcon icon={faBars} size="xl" />}
              className="text-gray-400 hover:text-white focus:outline-none flex "
            />
          </div>

          {/* Nav Links - Desktop View */}
          <div className="nav-options ">
            <a
              href="/"
              className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium"
            >
              About
            </a>
            <a
              href="#characters"
              className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium"
            >
              Characters
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a
            href="/"
            className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium"
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <a
            href="#about"
            className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium"
          >
            <FontAwesomeIcon icon={faUsers} /> About
          </a>
          <a
            href="#characters"
            className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium"
          >
            <FontAwesomeIcon icon={faBook} /> Characters
          </a>
          <a
            href="#faq"
            className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium"
          >
            <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
