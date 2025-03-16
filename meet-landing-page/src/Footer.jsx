import React from "react";
import imgFooter from "./assets/mobile/image-footer.jpg";

function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <div className="z-10 flex flex-col items-center">
        <div className="h-20 w-px bg-[#d1d1df]"></div>
        <p className="rounded-full border-1 border-[#d1d1df] bg-white px-5 py-4 font-[900] text-[#87879d]">
          02
        </p>
      </div>
      <img
        src={imgFooter}
        alt="Footer Image"
        className="absolute mt-28 max-h-[374px] w-full opacity-15"
      />
      <div className="-mt-7 flex flex-col items-center justify-center gap-6 bg-[#4d96a9] px-8 py-16 text-center">
        <h2 className="text-3xl font-[900] text-white">
          Experience more together
        </h2>
        <p className="text-white">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className="w-[193px] cursor-pointer rounded-full bg-[#855fb1] px-10 py-4 font-[900] text-white hover:bg-[#b18bdd]">
          Download{" "}
          <span className="text-purple-300 hover:text-purple-200">v1.3</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
