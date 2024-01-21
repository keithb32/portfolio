import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

/***************************************************************************************
 *  REFERENCES
 *
 *  Title: How can I fade a navbar with a scroll down with React?
 *  Author: DZack
 *  Date: 10/13/2017
 *  URL: https://stackoverflow.com/questions/46719757/how-can-i-fade-a-navbar-with-a-scroll-down-with-react
 *
 *  Title: Build A Responsive Next JS Website Using Tailwind CSS - Beginner Guide
 *  Author: Code Commerce
 *  Date: 7/2/2022
 *  URL: https://www.youtube.com/watch?v=HVyct9EUNP8
 *
 ***************************************************************************************/

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
      const newScrollY = Math.ceil(window.scrollY / 40) * 40;
      if (scrollY != newScrollY) {
        setScrollY(newScrollY);
      }
    };

    window.addEventListener("scroll", changeColor);
    window.addEventListener("scroll", changeNavOpacity);

    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("scroll", changeNavOpacity);
    };
  }, [scrollY]);

  const navbarOpacity = Math.min(30 / scrollY, 1);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 opacity-[${navbarOpacity}]`}
      hidden={hidden ? true : false}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 text-white">
        {/* Logo */}
        <Link href="/">
          <h1
            style={{ color: `${textColor}`, opacity: `${navbarOpacity}` }}
            className="font-bold text-4xl"
          >
            Keith Butler
          </h1>
        </Link>

        {/* Section Links */}
        <ul
          style={{ color: `${textColor}`, opacity: `${navbarOpacity}` }}
          className="hidden sm:flex"
        >
          <li className="p-4 hover:text-gray-500 text-lg">
            <Link href="/#about">About</Link>
          </li>
          <li className="p-4 hover:text-gray-500 text-lg">
            <Link href="/#experience">Experience</Link>
          </li>
          <li className="p-4 hover:text-gray-500 text-lg">
            <Link href="/#projects">Projects</Link>
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
