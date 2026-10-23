/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/A3Qp4rBpyQSnnOL1/whatsapp_image_2025-07-15_at_1.40.15_pm-removebg-preview-mePJQWDM7VSkzllM.png"
              alt="GIPS Logo"
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <Link to='/about'  >    
              <button className="flex items-center hover:text-blue-600 transition-colors">
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </button>
               </Link>
              <div className="absolute mt-2 w-52 bg-white border rounded-lg shadow-lg py-2 hidden group-hover:block">
                <Link to="/directors-desk" className="block px-4 py-2 hover:bg-gray-100">
                  Director’s Desk
                </Link>
                <Link to="/our-commitment" className="block px-4 py-2 hover:bg-gray-100">
                  Our Commitment
                </Link>
                <Link to="/principals-desk" className="block px-4 py-2 hover:bg-gray-100">
                  Principal’s Desk
                </Link>
              
              </div>
            </div>

            {/* Academics Dropdown */}
            <div className="relative group">
              <Link to='/academics'  >  
              <button className="flex items-center hover:text-blue-600 transition-colors">
                Academics <ChevronDown className="ml-1 w-4 h-4" />
              </button>
               </Link>
              <div className="absolute mt-2 w-52 bg-white border rounded-lg shadow-lg py-2 hidden group-hover:block">
                <Link to="/holiday-homework" className="block px-4 py-2 hover:bg-gray-100">
                  Holiday Homework
                </Link>
                <Link to="/to-the-students" className="block px-4 py-2 hover:bg-gray-100">
                  To the Students
                </Link>
                <Link to="/book-list" className="block px-4 py-2 hover:bg-gray-100">
                  Book List
                </Link>
              </div>
            </div>

            {/* Static Links */}
             <Link to="/facilities" className="hover:text-blue-600">
              Facilities
            </Link>
            <Link to="/mandatory-disclosure" className="hover:text-blue-600">
              Mandatory Disclosure
            </Link>
            <Link to="/faq" className="hover:text-blue-600">
              FAQ
            </Link>
            <Link to="/contact-us" className="hover:text-blue-600">
              Contact Us
            </Link>
            <Link to="/gallery" className="hover:text-blue-600">
              Gallery
            </Link>
            <Link to="/news" className="hover:text-blue-600">
              GIPS News
            </Link>
          
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none text-gray-800"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-slideDown">
          <div className="flex flex-col space-y-1">
            <Link to="/" onClick={handleMobileLinkClick} className="px-4 py-2 hover:bg-gray-100">
              Home
            </Link>

            {/* About Us */}
            <div>
              <Link to='/about'  >   
              <button
                onClick={() => toggleMobileDropdown("about")}
                className="w-full flex justify-between px-4 py-2 hover:bg-gray-100"
              >
                About Us <ChevronDown className="w-4 h-4" />
              </button>
              </Link>
              {mobileDropdown === "about" && (
                <div className="pl-6">
                  
                  <Link to="/directors-desk" onClick={handleMobileLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                    Director’s Desk
                  </Link>
                  <Link to="/our-commitment" onClick={handleMobileLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                    Our Commitment
                  </Link>
                  <Link to="/principals-desk" onClick={handleMobileLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                    Principal’s Desk
                  </Link>
                 
                </div>
              )}
            </div>

            {/* Academics */}
            <div>
                <Link to='/academics'  >  
              <button
                onClick={() => toggleMobileDropdown("academics")}
                className="w-full flex justify-between px-4 py-2 hover:bg-gray-100"
              >
                Academics <ChevronDown className="w-4 h-4" />
              </button>
              </Link>
              {mobileDropdown === "academics" && (
                <div className="pl-6">
                  <Link to="/holiday-homework" onClick={handleMobileLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                    Holiday Homework
                  </Link>
                  <Link to="/to-the-students" onClick={handleMobileLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                    To the Students
                  </Link>
                  <Link to="/book-list" onClick={handleMobileLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                    Book List
                  </Link>
                </div>
              )}
            </div>

            {/* Static Links */}
            {["facilities","mandatory-disclosure", "faq", "contact-us", "gallery", "news"].map(
              (path) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  onClick={handleMobileLinkClick}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {path
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
