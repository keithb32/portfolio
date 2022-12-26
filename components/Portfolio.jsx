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

  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: windowSize.innerWidth > 768 ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="max-w-[1240px] m-auto items-center p-3 mb-10"
      id="portfolio"
    >
      <DividerWithText text="Portfolio" />
      <div className="text-center">
        <h2 className="text-xl mb-6 text-theme">Check out some of my projects!</h2>
      </div>

      <div className="flex justify-center items-center">
        <Slider className="w-1/2 md:w-3/4" {...settings}>
          <Card
            title="Foodie"
            description="A one-stop shop for an individual's food needs. Features a recipe organizer, a searchable library of recipes, and a local restaurant finder to assist users with their food-related needs."
            badge="Mobile"
            tags={["React Native", "JavaScript", "Firebase", "Material UI", "Edamam API", "TomTom API"]}
          />
          <Card
            title="Bucket List (React Native)"
            description="An app that allows users to set goals with deadlines and then mark them when they are complete. Built for cross-platform."
            badge="Mobile"
            tags={["React Native", "JavaScript"]}
          />
          <Card
            title="Bucket List (Android)"
            description="An app that allows users to set goals with deadlines and then mark them when they are complete. Built for Android."
            badge="Mobile"
            tags={["Android", "Kotlin", "MySQL"]}
          />
          <Card
            title="HoosHealthTracker"
            description="A fitness tracker web application allowing users to track mood, calories, exercise, and sleep. Features a searchable library of over 500,000 foods and their nutrition info."
            badge="Web"
            tags={["Flask", "Python", "MySQL", "Bootstrap", "FoodDataCentral API", "Heroku"]}
          />
          <Card
            title="HoosNotes"
            description="A class organizer web application allowing users to create todo items, mark calendar events, upload lecture notes, and interact with other users in their classes via live chat."
            badge="Web"
            tags={["Django", "Python", "PostgreSQL", "Bootstrap", "Google OAuth2.0", "Twilio", "Heroku"]}
          />
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
