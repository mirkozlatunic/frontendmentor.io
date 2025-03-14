import React from "react";
import imgFooter from "./assets/mobile/image-footer.jpg";

function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="h-20 w-px bg-[#d1d1df]"></div>
        <p className="rounded-full border-1 border-[#d1d1df] px-5 py-4 font-[900] text-[#87879d]">
          02
        </p>
      </div>
      <div>
        <img src={imgFooter} />
      </div>
    </footer>
  );
}

export default Footer;
