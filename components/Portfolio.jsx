import React, { useState, useEffect } from "react";
import DividerWithText from "./DividerWithText";
import Card from "./Card";
import Slider from "react-slick";
import LinkWithIcon from "./LinkWithIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/***************************************************************************************
*  REFERENCES
*  
*  Title: https://bobbyhadz.com/blog/react-get-window-width-height
*  Author: Borislav Hadzhiev
*  URL: https://bobbyhadz.com/blog/react-get-window-width-height
*
*  Title: react-slick
*  Author: Kiran Abburi
*  Date: 4/17/2022
*  Code version: 0.29.0
*  URL: https://github.com/akiran/react-slick
*  Software License: MIT License


***************************************************************************************/

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

  var sliderSettings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: getNumSlidesToShow(),
    slidesToScroll: 1,
  };

  const projects = [
    {
      image: "/portfolio.png",
      url: "https://github.com/keithb32/portfolio",
      title: "Portfolio",
      description:
        "A responsive website detailing my professional experience, interests, and personal/team projects. You're currently viewing it!",
      tags: ["React", "JavaScript", "NextJS", "Tailwind CSS", "Vercel"],
      objectFit: "object-fill",
    },
    {
      image: "/foodie-frame.png",
      url: "https://github.com/keithb32/foodie",
      title: "Foodie",
      description:
        "A mobile app for an individual's culinary needs. Features a recipe organizer, a searchable library of recipes, and a local restaurant finder.",
      tags: [
        "React Native",
        "JavaScript",
        "Firebase",
        "Material UI",
        "Edamam API",
        "TomTom API",
      ],
      objectFit: "object-scale-down",
    },
    {
      image: "/hoos-health-tracker.png",
      url: "https://github.com/keithb32/hoos-health-tracker",
      title: "HoosHealthTracker",
      description:
        "A fitness tracker web application allowing users to track mood, calories, exercise, and sleep. Features a searchable library of over 500,000 foods with nutritional information.",
      tags: [
        "Flask",
        "Python",
        "MySQL",
        "Bootstrap",
        "FoodDataCentral API",
        "Heroku",
      ],
      objectFit: "object-fill",
    },
    {
      image: "/hoos-notes.png",
      url: "https://github.com/keithb32/hoos-notes",
      title: "HoosNotes",
      description:
        "A class organizer web application allowing users to create todo items, mark calendar events, upload lecture notes, and interact with other users in their classes via live chat.",
      tags: [
        "Django",
        "Python",
        "PostgreSQL",
        "Bootstrap",
        "OAuth2.0",
        "Twilio",
        "Heroku",
        "GitHub Actions",
      ],
      objectFit: "object-cover",
    },
    {
      image: "/bucketlist-rn-frame.png",
      url: "https://github.com/keithb32/bucketlist-android-ios",
      title: "Bucket List (Cross-platform)",
      description:
        "A mobile app allowing users to maintain a list of bucket items with deadline and completion dates. Built for iOS and Android devices.",
      tags: ["React Native", "JavaScript"],
      objectFit: "object-scale-down",
    },
    {
      image: "/bucketlist-android-frame.png",
      url: "https://github.com/keithb32/bucketlist-android",
      title: "Bucket List (Android)",
      description:
        "A mobile app allowing users to maintain a list of bucket items with deadline and completion dates. Built for Android devices.",
      tags: ["Android", "Kotlin", "MySQL"],
      objectFit: "object-scale-down",
    },
  ];

  return (
    <div
      className="max-w-[1240px] m-auto items-center p-3 mb-10"
      id="portfolio"
    >
      <DividerWithText text="Portfolio" />
      <div className="min-[540px]:text-center">
        <h2 className="text-lg mb-6 text-theme">
          Here are some of my most recent projects!
        </h2>
      </div>

      {/* Project Slider - Web */}
      <div className="hidden min-[540px]:flex justify-center items-center mb-4">
        <Slider
          className="w-1/2 min-[640px]:w-[90%] min-[920px]:w-[85%]"
          {...sliderSettings}
        >
          {projects &&
            projects.map((project, index) => <Card key={index} {...project} />)}
        </Slider>
      </div>

      {/* Project List - Mobile */}
      <div className="min-[540px]:hidden">
        {projects &&
          projects.map((project, index) => (
            <div key={index} className="mb-3">
              <LinkWithIcon text={project.title} url={project.url}/>
              <p><span className="font-bold">Description: </span>{project.description}</p>
              <p><span className="font-bold">Built with:</span> {project.tags.join(", ")} </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
