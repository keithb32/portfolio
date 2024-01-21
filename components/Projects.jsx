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

const Projects = () => {
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
    } else if (windowSize.innerWidth < 920) {
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
      image: "/quantify-yourself.png",
      url: "https://github.com/keithb32/quantified-self",
      title: "Quantify Yourself",
      description:
        "A responsive statistic tracking web application for data across all domains. Features a customizable user profile along with data search and export functionalities.",
      tags: ["PHP", "JavaScript/JQuery", "PostgreSQL", "Bootstrap"],
    },
    {
      image: "/ascent.png",
      url: "https://github.com/keithb32/game-ascent",
      title: "Ascent",
      description:
        "A 2D-platformer game inspired by Celeste, featuring a grappling hook mechanic and speedrunning medals.",
      tags: ["C#", "MonoGame"],
    },
    {
      image: "/foodie-frame.png",
      url: "https://github.com/keithb32/foodie",
      title: "Foodie",
      description:
        "An all-in-one food app. Features a recipe organizer, a searchable library of recipes, and a local restaurant finder.",
      tags: ["React Native", "JavaScript", "Firebase", "Material UI"],
    },
    {
      image: "/portfolio.png",
      url: "https://github.com/keithb32/portfolio",
      title: "Portfolio",
      description:
        "A responsive website detailing my professional experience, interests, and personal/team projects. You're currently viewing it!",
      tags: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      image: "/hoos-health-tracker.png",
      url: "https://github.com/keithb32/hoos-health-tracker",
      title: "HoosHealthTracker",
      description:
        "A fitness tracker web application that allows users to track mood, calories, exercise, and sleep. Features a searchable library of over 500,000 foods with nutritional information.",
      tags: ["Flask", "Python", "MySQL", "Bootstrap", "Heroku"],
    },
    {
      image: "/hoos-notes.png",
      url: "https://github.com/keithb32/hoos-notes",
      title: "HoosNotes",
      description:
        "A class organizer web application that allows users to create todo items, mark calendar events, upload lecture notes, and interact with other users in their classes via live chat.",
      tags: [
        "Django",
        "Python",
        "PostgreSQL",
        "Bootstrap",
        "Twilio",
        "Heroku",
        "GitHub Actions",
      ],
    },
  ];

  return (
    <div className="max-w-[1240px] m-auto items-center p-3 mb-10" id="projects">
      <DividerWithText text="Projects" />
      <div className="min-[540px]:text-center">
        <h2 className="text-lg mb-6">
          Here are some of my most recent personal and team projects!
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
              <LinkWithIcon text={project.title} url={project.url} />
              <p>
                <span className="font-bold">Description: </span>
                {project.description}
              </p>
              <p>
                <span className="font-bold">Built with:</span>{" "}
                {project.tags.join(", ")}{" "}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
