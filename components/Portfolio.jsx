import React, { useState, useEffect } from "react";
import DividerWithText from "./DividerWithText";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// https://bobbyhadz.com/blog/react-get-window-width-height

const Portfolio = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: undefined,
    innerHeight: undefined,
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("load", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("load", handleWindowResize);
    };
  }, []);

  const getNumSlidesToShow = () => {
    if (windowSize.innerWidth < 640) {
      return 1;
    }
    if (windowSize.innerWidth >= 640 && windowSize.innerWidth < 920) {
      return 2;
    } else {
      return 3;
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: getNumSlidesToShow(),
    slidesToScroll: 1,
  };

  return (
    <div
      className="max-w-[1240px] m-auto items-center p-3 mb-10"
      id="portfolio"
    >
      <DividerWithText text="Portfolio" />
      <div className="text-center">
        <h2 className="text-xl mb-6 text-theme">
          Here are some of my most recent projects!
        </h2>
      </div>

      <div className="flex justify-center items-center mb-4">
        <Slider className="w-1/2 min-[640px]:w-[90%] min-[920px]:w-[85%]" {...settings}>
          <Card
            title="Foodie"
            description="A mobile app for an individual's culinary needs. Features a recipe organizer, a searchable library of recipes, and a local restaurant finder."
            badge="Mobile"
            tags={[
              "React Native",
              "JavaScript",
              "Firebase",
              "Material UI",
              "Edamam API",
              "TomTom API",
            ]}
          />
          <Card
            title="HoosNotes"
            description="A class organizer web application allowing users to create todo items, mark calendar events, upload lecture notes, and interact with other users in their classes via live chat."
            badge="Web"
            tags={[
              "Django",
              "Python",
              "PostgreSQL",
              "Bootstrap",
              "OAuth2.0",
              "Twilio",
              "Heroku",
              "GitHub Actions",
            ]}
          />
          <Card
            title="HoosHealthTracker"
            description="A fitness tracker web application allowing users to track mood, calories, exercise, and sleep. Features a searchable library of over 500,000 foods with nutritional information."
            badge="Web"
            tags={[
              "Flask",
              "Python",
              "MySQL",
              "Bootstrap",
              "FoodDataCentral API",
              "Heroku",
            ]}
          />
          <Card
            title="Bucket List (Cross-platform)"
            description="A mobile app allowing users to maintain a list of bucket items with deadline and completion dates. Built for iOS and Android devices."
            badge="Mobile"
            tags={["React Native", "JavaScript"]}
          />
          <Card
            title="Bucket List (Android)"
            description="A mobile app allowing users to maintain a list of bucket items with deadline and completion dates. Built for Android devices."
            badge="Mobile"
            tags={["Android", "Kotlin", "MySQL"]}
          />
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
