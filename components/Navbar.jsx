import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// https://stackoverflow.com/questions/46719757/how-can-i-fade-a-navbar-with-a-scroll-down-with-react

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 120) {
        setHidden(true);
      } else {
        setHidden(false);
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };

    const changeNavOpacity = () => {
      const newScrollY = Math.ceil(window.scrollY / 20) * 20;
      if (scrollY != newScrollY) {
        setScrollY(newScrollY);
      }
    };

    window.addEventListener("scroll", changeColor);
    window.addEventListener("scroll", changeNavOpacity);
  }, [scrollY]);

  const opacity = Math.min(50 / scrollY, 1);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 opacity-[${opacity}]`}
      hidden={hidden ? true : false}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 text-white">
        {/* Logo */}
        <Link href="/">
          <h1
            style={{ color: `${textColor}`, opacity: `${opacity}` }}
            className="font-bold text-4xl"
          >
            Keith Butler
          </h1>
        </Link>

        {/* Section Links */}
        <ul
          style={{ color: `${textColor}`, opacity: `${opacity}` }}
          className="hidden sm:flex"
        >
          <li className="p-4 hover:text-gray-500 text-lg">
            <Link href="/#about">About</Link>
          </li>
          <li className="p-4 hover:text-gray-500 text-lg">
            <Link href="/#experience">Experience</Link>
          </li>
          <li className="p-4 hover:text-gray-500 text-lg">
            <Link href="/#portfolio">Portfolio</Link>
          </li>
          <li className="p-4 hover:text-gray-500 text-lg">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#experience">Experience</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
