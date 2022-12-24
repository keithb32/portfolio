import React, {useState, useEffect} from "react";
import DividerWithText from "./DividerWithText";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// https://bobbyhadz.com/blog/react-get-window-width-height
function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

const Portfolio = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: innerWidth > 768 ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="max-w-[1240px] m-auto items-center p-3 mb-10"
      id="portfolio"
    >
      <DividerWithText text="Portfolio" />
      <div className="text-center">
        <h2 className="text-xl mb-6">Check out some of my projects!</h2>
      </div>

      <div className="flex justify-center items-center">
        <Slider className="w-3/4" {...settings}>
          <div>
            <Card title="1" />
          </div>
          <div>
            <Card title="2" />
          </div>
          <div>
            <Card title="3" />
          </div>
          <div>
            <Card title="4" />
          </div>
          <div>
            <Card title="5" />
          </div>
          <div>
            <Card title="6" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
