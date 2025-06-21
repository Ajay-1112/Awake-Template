import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "About", label: "About Us" },
    { id: "Services", label: "Services" },
    { id: "Projects", label: "Projects" },
    { id: "Team", label: "Team" },
    { id: "Pricing", label: "Pricing" },
    { id: "Awards", label: "Awards" },
  ];

  // Handle scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed max-w-7xl mx-auto top-6 md:top-3 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? " bg-white1/90 rounded-3xl md:backdrop-blur-lg md:shadow-lg md:border md:border-gray-200/50 md:rounded-full"
            : "bg-transparent"
        } px-4 sm:px-6 py-3 md:py-4 lg:px-8`}
      >
        <div className="max-w-7xl mx-auto  rouded-full   flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <h2 className="text-2xl font-bold">Awake</h2>
            </div>
          </div>

          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 rounded-full p-1.5 bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative cursor-pointer px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                    activeSection === item.id
                      ? "bg-white shadow-lg text-light-text"
                      : "text-primary hover:text-gray-900 hover:bg-white/70 "
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-20"></div>
                  )}
                </a>
              ))}
            </div>
          </nav>

          <Button
            text="Let's Collaborate"
            link="/learn-more"
            className="hidden md:flex"

          />

          <button
            ref={mobileButtonRef}
            className="md:hidden relative p-2  hover:bg-gray-100 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6  mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-900 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 mx-2 border border-gray-200/50 shadow-xl">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`block text-light-text hover:text-dark-text transition-all duration-200 px-4 py-3 rounded-xl font-medium ${
                    activeSection === item.id
                      ? "bg-white shadow-md text-light-text"
                      : "hover:bg-gray-50 hover:pl-6"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl hover:from-gray-900 hover:to-black transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
