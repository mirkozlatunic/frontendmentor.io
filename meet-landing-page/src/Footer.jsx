import React from "react";
import imgFooter from "./assets/desktop/image-footer.jpg";

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
        className="absolute mt-28 h-[374px] object-cover opacity-15 md:h-[320px]"
      />
      <div className="-mt-7 flex h-[374px] flex-col items-center bg-[#4d96a9] px-8 py-16 text-center md:h-[320px] md:w-screen">
        <div className="flex flex-col items-center gap-6 md:w-[504px]">
          <h2 className="text-3xl font-[900] text-white">
            Experience more together
          </h2>
          <p className="text-white">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <button className="z-10 w-[193px] cursor-pointer rounded-full bg-[#855fb1] px-10 py-4 font-[900] text-white hover:bg-[#b18bdd]">
            Download{" "}
            <span className="text-purple-300 hover:text-purple-200">v1.3</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
