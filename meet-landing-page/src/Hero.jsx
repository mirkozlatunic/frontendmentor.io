import React from "react";
import imgCircles from "./assets/tablet/image-hero.png";

function Hero() {
  return (
    <div className="flex w-full flex-col items-center p-8 pt-16 text-center">
      <div className="pb-12">
        <img src={imgCircles} alt="circles" className="overflow-x-auto" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-[900] text-[#28283d]">
          Group Chat for Everyone
        </h1>
        <p className="text-[#87879d]">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <button className="w-[193px] cursor-pointer rounded-full bg-[#4d96a9] px-10 py-4 font-[900] text-white hover:bg-[#71c0d4]">
          Download{" "}
          <span className="text-[#8fe3f9] hover:text-[#71c0d4]">v1.3</span>
        </button>
        <button className="cursor-pointer rounded-full bg-[#855fb1] px-10 py-4 font-[900] text-white hover:bg-[#b18bdd]">
          What is it
        </button>
      </div>
    </div>
  );
}

export default Hero;
