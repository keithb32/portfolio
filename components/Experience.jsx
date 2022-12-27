import React from "react";
import DividerWithText from "./DividerWithText";
import { Chrono } from "react-chrono";
import ChronoDetail from "./ChronoDetail";

const Experience = () => {
  const items = [
    {
      title: "Aug 2022 - Present",
      workplace: "U.S. Army Technology Development Directorate",
      jobTitle: "Computer Science Intern",
      image: "https://unsplash.it/75/75",
      listItems: [
        `• Facilitated preparations for test and evaluation of flight demonstration of multiple autonomous unmanned aircraft.`,
        `• Supported installation of computer networks used for data acquisition.`,
      ],
    },
    {
      title: "Aug 2019 - May 2020",
      workplace: "NASA Langley Research Center",
      jobTitle: "Structural  & Thermal Systems Branch Intern",
      image: "https://unsplash.it/75/75",
      listItems: [
        `• Made improvements to a Python sizing optimization script for
        the CobraMRV Mars Lander Vehicle including: the addition of a
        user-friendly GUI, the ability to accept any CobraMRV variant as
        input, and the ability to generate sensitivity graphs comparing
        structural mass and load case parameters.`,
        `• Automated the functionality of structural engineering software
        including NASTRAN and HyperSizer.`,
        `• Developed APA research paper under guidance of NASA mentor and
        presented findings to a symposium and branch meeting.`,
      ],
    },
    {
      title: "Jun 2018 - Apr 2020",
      workplace: "Tabb Library",
      jobTitle: "Library Clerk Aide",
      image: "https://unsplash.it/75/75",
      listItems: [
        `• Shelved books, organized book carts, performed inventory
      checks, and assisted patrons with finding items.`,
      ],
    },
  ];

  return (
    <div
      className="max-w-[1240px] m-auto items-center p-3 mb-10"
      id="experience"
    >
      <DividerWithText text="Experience" />

      {/* Timeline */}
      <div className="flex m-auto items-center justify-center w-100 h-100">
        <Chrono
          className="text-left"
          mode="VERTICAL"
          scrollable={{ scrollbar: false }}
          cardHeight="150"
          theme={{
            primary: "black",
            titleColor: "black",
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
                listItems={item.listItems}
              />
            ))}
        </Chrono>
      </div>
    </div>
  );
};

export default Experience;
