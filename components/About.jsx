/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DividerWithText from "./DividerWithText";

const About = () => {
  return (
    <div className="max-w-[1240px] m-auto items-center p-3 mb-10" id="about">
      <DividerWithText text="About Me" />
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
        <div className="flex justify-center items-center mb-5 sm:mb-0">
          <img src="https://unsplash.it/250/250" />
        </div>
        <div className="sm:col-span-2">
          <p>
            I'm a third-year student studying computer science at the University
            of Virginia through the School of Engineering and Applied Science.
            Along with computer science, I am pursuing minors in applied
            math and sociology.
          </p>
          <br />
          <p>
            My passion for programming began my junior year of high
            school when I took my first course in Python, Computational Physics.
            That class taught me the power of computers as I used Python to
            solve perform computations and produce visualizations for physics problems involving large datasets. At that time I also gained
            interest in competitive programming, enrolling in competitions such
            as ODU's Great Computer Challenge (link here).
          </p>
          <br />
          <div>
            <p>
              Since attending the University of Virginia, I have taken several
              electives including Database Systems, Machine Learning, and Mobile
              Application Development which have encouraged me to specialize in
              frontend development and data analytics. I love creating web apps,
              mobile apps, data visualizations, and machine learning models.
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
            out my resume (link here).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
