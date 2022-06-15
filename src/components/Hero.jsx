import React from "react";
import Video from "../assets/Hero.mp4";

const Hero = () => {
  return (
    <div className="h-screen w-full relative -z-10">
      <video
        autoPlay
        className="h-screen w-full object-cover"
        src={Video}
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute w-full h-full top-0 grid items-center text-center text-white">
        <h1>First Class Travel</h1>
      </div>
    </div>
  );
};

export default Hero;
