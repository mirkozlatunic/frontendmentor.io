import React from "react";
import imgCircles from "./assets/tablet/image-hero.png";

function Hero() {
  return (
    <div className="align-center flex w-full flex-col items-center pt-16 text-center">
      <div className="pb-12">
        <img
          src={imgCircles}
          alt="circles"
          className="max-w-md overflow-x-auto"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-[900]">Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <button className="w-[193px] rounded-full bg-[#4d96a9] px-10 py-4 font-[900] text-white">
          Download <span className="text-[#8fe3f9]">v1.3</span>
        </button>
        <button className="rounded-full bg-[#855fb1] px-10 py-4 font-[900] text-white">
          What is it
        </button>
      </div>
    </div>
  );
}

export default Hero;
