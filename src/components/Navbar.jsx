import React, { useState, useEffect } from "react";
import whiteLogo from "../assests/images/logo/white-logo.svg";
import BlackLogo from "../assests/images/logo/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`flex items-center justify-center`}>
      <div className="sm:w-[90%] navbar py-4 sm:p-5 justify-between md:justify-start">
        <div className="xs:w-10/12 sm:w-[50%] justify-start">
          <a
            className="text-xl normal-case bg-transparent outline-none border-main hover:cursor-pointer"
            href="#home"
          >
            <img
              src={scrolled ? whiteLogo : BlackLogo}
              alt="logo"
              className="h-10 w-30"
            />
          </a>
        </div>
        <div className=" dropdown bg-transparent dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost bg-transparent lg:hidden"
          >
            <svg
              fill="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
              className="w-6 h-6"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
              </g>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow  menu text-primary menu-compact dropdown-content bg-base-100 rounded-box w-60"
          >
            <li className="hover:text-main bg-transparent">
              <a className="bg-transparent" href="#home">
                Home
              </a>
            </li>
            <li className="hover:text-main bg-transparent">
              <a className="bg-transparent" href="#features">
                Features
              </a>
            </li>
            <li className="hover:text-main bg-transparent">
              <a className="bg-transparent" href="#overview">
                Overview
              </a>
            </li>
            <li className="hover:text-main bg-transparent">
              <a className="bg-transparent" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="hover:text-main bg-transparent">
              <a className="bg-transparent" href="#team">
                Team
              </a>
            </li>
            <li tabIndex={0} className="hover:text-main bg-transparent">
              <a className="bg-transparent" href="#blog">
                Blog
              </a>
              {/* <ul className="p-2 bg-secondary" id="dropdownLeft">
                <li className="hover:text-main bg-transparent">
                  <a className="bg-transparent" href="#blog">Blog Grid Sidebar</a>
                </li>
                <li className="hover:text-main bg-transparent">
                  <a className="bg-transparent" href="#blog">Blog Single</a>
                </li>
                <li className="hover:text-main bg-transparent">
                  <a href="#blog" className="bg-transparent">Blog Single Sidebar</a>
                </li>
              </ul> */}
            </li>
            <li className="hover:text-main bg-transparent">
              <a className="bg-transparent" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1  menu menu-horizontal">
            <li>
              <a className="hover:bg-transparent" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent" href="#overview">
                Overview
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent" href="#team">
                Team
              </a>
            </li>
            <li tabIndex={0}>
              <a className="hover:bg-transparent " href="#blog">
                Blog
              </a>
              <ul className="z-10 p-2 bg-secondary">
                <li>
                  <a
                    className="hover:text-main text-primary bg-transparent"
                    href="#blog"
                  >
                    Blog Grid Sidebar
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-main text-primary bg-transparent"
                    href="#blog"
                  >
                    Blog Single
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-main text-primary bg-transparent"
                    href="#blog"
                  >
                    Blog Single Sidebar
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:bg-transparent" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:inline-flex sm:w-[50%] justify-end ">
          <a
            className={
              scrolled
                ? "hidden px-8 text-white border-2 sm:inline-flex btn btn-outline hover:bg-secondary hover:border-secondary hover:text-main"
                : "hidden px-8 text-white border-2 bg-main sm:inline-flex btn btn-outline hover:bg-primary hover:border-primary hover:text-secondary"
            }
            href="#get"
          >
            Get It Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
