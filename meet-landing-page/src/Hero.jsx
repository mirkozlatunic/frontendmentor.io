import React from "react";
import imgCircles from "./assets/tablet/image-hero.png";

function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden p-8 pt-16 text-center">
      <div className="pb-12">
        <img
          src={imgCircles}
          alt="circles"
          className="max-w-[433px] md:max-w-[802px]"
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:max-w-[450px]">
        <h1 className="text-4xl font-[900] text-[#28283d] md:text-5xl">
          Group Chat for Everyone
        </h1>
        <p className="text-[#87879d]">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <button className="w-[193px] cursor-pointer rounded-full bg-[#4d96a9] px-10 py-4 font-[900] text-white hover:bg-[#71c0d4]">
            Download{" "}
            <span className="text-[#8fe3f9] hover:text-[#71c0d4]">v1.3</span>
          </button>
          <button className="max-w-[161px] cursor-pointer rounded-full bg-[#855fb1] px-10 py-4 font-[900] text-white hover:bg-[#b18bdd]">
            What is it?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
