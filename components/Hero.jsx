/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = () => {
  return (
    <header className="flex items-center justify-center h-screen w-full mb-6 bg-fixed bg-center bg-cover hero-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />

      {/* Main Text */}
      <div className="flex flex-col p-5 z-[2] mt-[2rem] mx-10 font-light sm:text-center sm:break-words sm:w-1/2 sm:mt-[-10rem]">
        <p className="py-5 text-lg text-gray-400 sm:text-xl">Hi, my name is</p>
        <h2 className="text-4xl text-[#FAF9F6] font-bold sm:text-5xl ">
          Keith Butler.
        </h2>
        <p className="py-5 text-lg text-gray-400 sm:text-xl">
          I'm a third-year <span className="text-[#FAF9F6]">computer science</span>{" "}
          student at the{" "}
          <span className="text-[#FAF9F6]">University of Virginia</span> who is
          interested in <span className="text-[#FAF9F6]">frontend development</span>{" "}
          and <span className="text-[#FAF9F6]">data science</span>. In my free time
          I enjoy reading, listening to music, lifting, and playing
          basketball. I am currently seeking a <span className="text-[#FAF9F6]">summer internship for 2023</span>.
        </p>
      </div>

    </header>
  );
};

export default Hero;
