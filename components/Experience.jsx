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
      jobTitle: "Research Assistant",
      image: (
        <Image
          src={UvaLogo}
          width={75}
          height={75}
          alt="UVA Logo"
          className="object-fit"
          style={{ height: 75 }}
        />
      ),
      time: "Aug 2023 - Present",
      listItems: [
        `• Supported development of web-based interventions at the Center for Behavioral Health & Technology.`,
        `• Migrated admin views to a new UI module, added email validation and audio transcript feature, performed refactors, updated unit tests, and wrote tickets for future work.`,
        `• Used Ruby on Rails, PostgreSQL, JavaScript, TailwindCSS, and Hotwire.`,
      ],
    },
    {
      workplace: "Leidos",
      jobTitle: "Software Engineer Intern",
      image: (
        <Image
          src="/leidos.jpg"
          width={75}
          height={75}
          alt="Leidos Logo"
          className="object-fit"
          style={{ height: 75 }}
        />
      ),
      time: "May 2023 - Aug 2023",
      listItems: [
        `• Supported development of a web application used for space domain awareness.`,
        `• Wrote microservice for persisting sensor data from a third-party API, decoupled and migrated UI components to a dedicated module, resolved bugs, and produced documentation on setup for Windows environments.`,
        `• Used Docker, Kubernetes, React, JavaScript, Java, Kafka, and MongoDB.`,
        `• Worked alongside senior engineers following the Scrum methodology.`,
      ],
    },
    {
      workplace: "University of Virginia",
      jobTitle: "Head Teaching Assistant - CS 4750: Database Systems",
      image: (
        <Image
          src={UvaLogo}
          width={75}
          height={75}
          alt="UVA Logo"
          className="object-fit"
          style={{ height: 75 }}
        />
      ),
      time: "Jan 2023 - Dec 2023",
      listItems: [
        `• Sent weekly announcements to the class and teaching team, revised and uploaded assignment rubrics, reviewed grades for consistency, and handled regrade requests.`,
        `• Hosted office hours 2-3 times per week, graded assignments, proctored exams, and responded to questions on the class discussion board.`,
        `• Covered database topics including entity-relationship model, normalization, SQL, relational algebra, indexing, security, transactions, and concurrency control.`,
        `• Delivered a lecture to over 100 students about indexing and B+ trees.`,
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
      time: "Aug 2022 - Mar 2023",
      listItems: [
        `• Helped set up mobile laboratories for a flight demonstration of multiple autonomous unmanned aircraft.`,
        `• Supported design and installation of local area networks used for data acquisition and flight control.`,
        `• Investigated and presented a solution for integrating proprietary autonomous flight software with in-house software.`,
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
        `• Refactored a sizing optimization script to accept variants of the CobraMRV Mars Lander Vehicle model.`,
        `• Built a graphical user interface for interacting with the script and producing sensitivity graphs.`,
        `• Used Python, Excel VBA, and finite element analysis software including NASTRAN, PATRAN, and HyperSizer.`,
        `• Authored a research paper and presented findings to a symposium and branch meeting.`,
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
        `• Organized book carts and returned books to their designated locations.`,
        `• Conducted inventory checks.`,
        `• Assisted patrons in locating books, DVDs, and other materials.`,
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
