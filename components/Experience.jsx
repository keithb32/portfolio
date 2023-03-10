import React from "react";
import DividerWithText from "./DividerWithText";
import { Chrono } from "react-chrono";
import ChronoDetail from "./ChronoDetail";
import Image from "next/image";
import ArmyLogo from "../public/army-logo.svg?url";
import NasaLogo from "../public/nasa-logo.svg?url";
import UvaLogo from "../public/uva-logo.svg?url";

/***************************************************************************************
*  REFERENCES
*  
*  Title: react-chrono
*  Author: Prabhu Murthy
*  Date: 1/4/2023
*  Code version: 1.20.0
*  URL: https://github.com/prabhuignoto/react-chrono
*  Software License: MIT License
***************************************************************************************/

const Experience = () => {
  const items = [
    {
      workplace: "University of Virginia",
      jobTitle: "Database Course Teaching Assistant",
      image: (
        <Image
          src={UvaLogo}
          width={75}
          height={75}
          alt="UVA Logo"
          className="object-fit"
          style={{height: 75}}
          />
      ),
      time: "Jan 2022 - Present",
      listItems: [
        `• Grade assignments, projects, and examinations for CS 4750 (Database Systems).`,
        `• Assist students with course material by answering questions in class, responding to discussion board posts, and hosting office hours.`,
      ],
    },
    {
      workplace: "U.S. Army Technology Development Directorate",
      jobTitle: "Software Engineering Intern",
      image: (
        <Image
          src={ArmyLogo}
          width={75}
          height={75}
          alt="Army Logo"
          className="object-fit"
          style={{ height: 75 }}
        />
      ),
      time: "Aug 2022 - Present",
      listItems: [
        `• Facilitate preparations for a flight demonstration of multiple autonomous unmanned aircraft.`,
        `• Support design and installation of computer networks used for data acquisition and flight control.`,
        `• Communicate autonomous flight software design solutions to audience of computer, aerospace, and mechanical engineers.`
      ],
    },
    {
      workplace: "NASA Langley Research Center",
      jobTitle: "Research Mentee - Structural & Thermal Systems",
      image: (
        <Image
          src={NasaLogo}
          width={75}
          height={75}
          alt="Nasa Logo"
          style={{ height: 75 }}
        />
      ),
      time: "Aug 2019 - May 2020",
      listItems: [
        `• Improved a Python sizing optimization script for the CobraMRV Mars Lander Vehicle by implementing a user-friendly interface, the ability to accept variable model inputs, and the ability to generate sensitivity graphs comparing structural mass and load case parameters.`,
        `• Automated the functionality of structural engineering software
        including NASTRAN and HyperSizer.`,
        `• Developed APA research paper and presented findings to a symposium and branch meeting.`,
      ],
    },
    {
      workplace: "Tabb Library",
      jobTitle: "Library Clerk Aide",
      image: (
        <Image
          src="/library-logo.jpg"
          width={75}
          height={75}
          alt="Library Logo"
          style={{ height: 75 }}
        />
      ),
      time: "Jun 2018 - Apr 2020",
      listItems: [
        `• Shelved books, organized book carts, performed inventory
      checks, and assisted patrons with finding items.`,
      ],
    },
  ];

  return (
    <div className="max-w-[1240px] m-auto items-center p-3" id="experience">
      <DividerWithText text="Experience" />

      {/* Timeline - Web */}
      <div className="hidden min-[540px]:flex m-auto items-center justify-center w-100 h-100">
        <Chrono
          className="text-left"
          mode="VERTICAL"
          scrollable={{ scrollbar: false }}
          cardHeight="100"
          theme={{
            primary: "#212427",
            titleColor: "#212427",
            cardBgColor: "#FAF9F6",
          }}
          hideControls
          disableClickOnCircle
          activeItemIndex={-1}
        >
          {items &&
            items.map((item, index) => (
              <ChronoDetail
                key={index}
                image={item.image}
                workplace={item.workplace}
                jobTitle={item.jobTitle}
                time={item.time}
                listItems={item.listItems}
              />
            ))}
        </Chrono>
      </div>

      {/* Timeline - Mobile */}
      <div className="min-[540px]:hidden">
        {items &&
          items.map((item, index) => (
            <ChronoDetail
              key={index}
              image={item.image}
              workplace={item.workplace}
              jobTitle={item.jobTitle}
              time={item.time}
              listItems={item.listItems}
            />
          ))}
      </div>
    </div>
  );
};

export default Experience;
