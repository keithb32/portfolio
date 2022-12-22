import React from "react";

const Hero = () => {
  return (
    <header className="flex items-center justify-center h-screen w-full mb-12 bg-fixed bg-center bg-cover hero-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />

      {/* Main Text */}
      <div className="p-5 z-[2] mt-[-10rem] mx-10 font-light sm:text-center sm:break-words sm:w-1/2">
        <p className="py-5 text-lg text-white sm:text-xl">Hi, my name is</p>
        <h2 className="text-4xl text-white font-bold sm:text-5xl ">Keith Butler.</h2>
        <p className="py-5 text-lg text-gray-400 sm:text-xl">
          I'm a third-year <span className="text-white">computer science</span> student at the <span className="text-white">University of Virginia</span> who is
          passionate in frontend development and data science. In my free time I
          enjoy reading, journaling, lifting, and playing
          basketball. I am currently seeking a summer internship for 2023.
        </p>
      </div>
    </header>
  );
};

export default Hero;
