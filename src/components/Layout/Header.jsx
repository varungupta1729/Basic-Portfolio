import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../static/data";

const Header = ({ activeNav, setActiveNav }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-20">
      <header
        id="header"
        className="sticky top-0 z-20 flex bg-white justify-between items-center px-10 py-5 lg:px-[5.8rem] lg:py-9 text-[0.8rem] font-medium shadow-custom-header"
      >
        <div className="w-[7rem] lg:w-auto">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <button className="block lg:hidden" onClick={toggleMobileMenu}>
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {!isMobileMenuOpen && (
            <Navbar
              activeNav={activeNav}
              setActiveNav={setActiveNav}
              isMobileMenuOpen={isMobileMenuOpen}
              scrollToSection={scrollToSection}
            />
          )}
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed mt-[5.8rem] bg-white w-full z-20 top-0 text-center  flex justify-center items-center ">
          <Navbar
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            isMobileMenuOpen={isMobileMenuOpen}
            scrollToSection={scrollToSection}
          />
        </div>
      )}
    </div>
  );
};

const Navbar = ({
  activeNav,
  setActiveNav,
  isMobileMenuOpen,
  scrollToSection,
}) => {
  const location = useLocation();
  if (location.pathname === "/skills") {
    setActiveNav(location.pathname);
  }

  return (
    <ul
      className={`lg:flex justify-center items-center mr-[-.6rem]  lg:gap-4 ${
        isMobileMenuOpen ? "block" : "hidden"
      } lg:block`}
    >
      {navItems.map((item) => (
        <Link to={item.path} onClick={() => scrollToSection(item.key)}>
          {" "}
          <li
            key={item.key}
            onClick={() => setActiveNav(item.key)}
            className={
              activeNav === item.key
                ? "bg-[#FFB400] py-2 px-4  rounded-[5px] my-3 lg:my-auto "
                : "my-3 lg:my-auto py-2 px-4"
            }
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Header;
