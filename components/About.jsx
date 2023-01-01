/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DividerWithText from "./DividerWithText";
import { FiExternalLink } from "react-icons/fi";
import LinkWithIcon from "./LinkWithIcon";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-[1240px] m-auto items-center p-3 mb-10" id="about">
      <DividerWithText text="About Me" />
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
        {/* Left column - portrait + resume & transcript links */}
        <div className="flex flex-col justify-center items-center mx-4 mt-4 sm:mb-0">
          <Image
            src="https://unsplash.it/250/250"
            width={250}
            height={250}
            alt=""
            className="mb-4"
          />
          {/*
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="text-[#212427] border-2 border-[#212427] px-4 py-2 mb-2 rounded-md hover:bg-gray-300 min-[250px]:w-[200px]">
              <LinkWithIcon text="Resume" url="#" forButton />
            </button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="text-[#212427] border-2 border-[#212427] px-4 py-2 mb-4 rounded-md hover:bg-gray-300 min-[250px]:w-[200px]">
              <LinkWithIcon text="Transcript" url="#" forButton />
            </button>
          </a>
          */}
        </div>

        {/* Right column - paragraph intro */}
        <div className="sm:col-span-2">
          <p>
            I'm a third-year student studying computer science at the University
            of Virginia through the School of Engineering and Applied Science.
            Along with computer science, I am pursuing minors in applied math
            and sociology.
          </p>
          <br />
          <p>
            My passion for programming began my junior year of high school when
            I took my first course in Python, Computational Physics. That class
            taught me the power of computers as I used Python to perform
            computations and produce visualizations for physics problems
            involving large datasets. At that time I also gained interest in
            competitive programming, enrolling in competitions such as{" "}
            <LinkWithIcon
              text="ODU's Great Computer Challenge"
              url="http://education.whro.org/great-computer-challenge"
            />
            .
          </p>
          <br />
          <div>
            <p>
              Since attending the University of Virginia, I have taken several
              electives including Database Systems, Machine Learning, and Mobile
              Application Development which have encouraged me to specialize in
              frontend development and data analytics.
              Recently, I've been working with:
            </p>
            <ul className="list-disc list-inside my-2 mx-5">
              <li>React</li>
              <li>JavaScript</li>
              <li>React Native</li>
              <li>Android</li>
              <li>Firebase</li>
              <li>Figma</li>
            </ul>
          </div>
          <p>
            For a full list of the technologies I've worked with, you can check
            out my <LinkWithIcon text="resume" url="#" />.
          </p>
          <br />
          <p>
            In my free time I enjoy reading, listening to music, lifting, and
            playing basketball.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
