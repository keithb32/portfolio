import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

/***************************************************************************************
 *  REFERENCES
 *
 *  Title: How to create a Scroll To Top button in React JS ?
 *  Author: gurjotloveparmar
 *  Date: 3/12/2021
 *  URL: https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/#
 ***************************************************************************************/



const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <div>
      {visible && (
        <a href="#">
          <FaArrowCircleUp
            className="fixed bottom-2 right-4 w-10 h-10"
            onClick={scrollToTop}
          />
        </a>
      )}
    </div>
  );
};

export default ScrollButton;
