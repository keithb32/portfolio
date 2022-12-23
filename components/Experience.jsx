import React from "react";
import DividerWithText from "./DividerWithText";
import { Chrono } from "react-chrono";

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
          {/* Body text for Chrono cards. Should refactor this into a component */}
          <div>
            <ul>
              <li>
                • Facilitated preparations for test and evaluation of flight
                demonstration of multiple autonomous unmanned aircraft.
              </li>
              <li>
                • Supported installation of computer networks used for data
                acquisition.
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                • Made improvements to a Python sizing optimization script for
                the CobraMRV Mars Lander Vehicle including: the addition of a
                user-friendly GUI, the ability to accept any CobraMRV variant as
                input, and the ability to generate sensitivity graphs comparing
                structural mass and load case parameters.
              </li>
              <li>
                • Automated the functionality of structural engineering software
                including NASTRAN and HyperSizer.
              </li>
              <li>
                • Developed APA research paper under guidance of NASA mentor and
                presented findings to a symposium and branch meeting.
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                • Shelved books, organized book carts, performed inventory
                checks, and assisted patrons with finding items.
              </li>
            </ul>
          </div>
        </Chrono>
      </div>
    </div>
  );
};

export default Experience;
