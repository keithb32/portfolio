/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DividerWithText from "./DividerWithText";
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
            src="/portrait.jpeg"
            width={250}
            height={200}
            alt=""
            className="mb-4"
          />
        </div>

        {/* Right column - paragraph intro */}
        <div className="sm:col-span-2">
          <p>
            I'm a fourth-year student studying computer science at the
            University of Virginia's School of Engineering. Along with computer
            science, I am pursuing a minor in applied math.
          </p>
          <br />
          <p>
            My passion for programming began my junior year of high school when
            I took my first programming course, Computational Physics. In that
            class, I used Python to perform calculations and produce
            visualizations for physics problems involving large datasets, which
            taught me the power of computers. At that time, I also gained
            interest in competitive programming, enrolling in competitions such
            as{" "}
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
              electives including Database Systems, Machine Learning, Mobile
              Application Development, Programming Languages for Web
              Applications, and Cloud Computing, which have encouraged me to
              specialize in web development and data analytics. Recently, I've
              been working with:
            </p>
            <ul className="list-disc list-inside my-2 mx-5">
              <li>React</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Docker & Kubernetes</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
          <p>
            For a full list of the technologies I've worked with, you can check
            out my{" "}
            <LinkWithIcon
              text="resume"
              url="https://drive.google.com/file/d/11qvP-n_p5D416nOljWOMjFN1cIhsZjd4/view?usp=sharing"
            />
            .
          </p>
          <br />
          <p>
            In my free time I enjoy reading, listening to music, weightlifting,
            and playing basketball. I also love spending time with my two dogs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
