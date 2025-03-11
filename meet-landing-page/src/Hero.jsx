import React from "react";
import imgCircles from "./assets/tablet/image-hero.png";

function Hero() {
  return (
    <div className="align-center flex w-full flex-col items-center pt-16 text-center">
      <div className="pb-12">
        <img src={imgCircles} alt="circles" className="max-w-108" />
      </div>
      <div className="">
        <h1>Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <button>
          Download <span>v1.3</span>
        </button>
        <button>What is it</button>
      </div>
    </div>
  );
}

export default Hero;
