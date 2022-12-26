import React from "react";
import DividerWithText from "./DividerWithText";
import { Chrono } from "react-chrono";
import BulletedList from "./BulletedList";

const Experience = () => {
  const items = [
    {
      title: "Aug 2022 - Present",
      cardTitle: "U.S. Army Technology Development Directorate",
      cardSubtitle: "Computer Science Intern",
    },
    {
      title: "Aug 2019 - May 2020",
      cardTitle: "NASA Langley Research Center",
      cardSubtitle: "Structural  & Thermal Systems Branch Intern",
    },
    {
      title: "Jun 2018 - Apr 2020",
      cardTitle: "Tabb Library",
      cardSubtitle: "Library Clerk Aide",
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
          items={items}
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
          {/* Body text for timeline cards */}
          <BulletedList
            listItems={[
              `• Facilitated preparations for test and evaluation of flight demonstration of multiple autonomous unmanned aircraft.`,
              `• Supported installation of computer networks used for data acquisition.`,
            ]}
          />
          <BulletedList
            listItems={[
              `• Made improvements to a Python sizing optimization script for
              the CobraMRV Mars Lander Vehicle including: the addition of a
              user-friendly GUI, the ability to accept any CobraMRV variant as
              input, and the ability to generate sensitivity graphs comparing
              structural mass and load case parameters.`,
              `• Automated the functionality of structural engineering software
              including NASTRAN and HyperSizer.`,
              `• Developed APA research paper under guidance of NASA mentor and
              presented findings to a symposium and branch meeting.`,
            ]}
          />
          <BulletedList
            listItems={[
              `• Shelved books, organized book carts, performed inventory
            checks, and assisted patrons with finding items.`,
            ]}
          />
        </Chrono>
      </div>
    </div>
  );
};

export default Experience;
