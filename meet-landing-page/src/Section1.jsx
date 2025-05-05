import React from "react";
import imgWomanVideocall from "./assets/desktop/image-woman-in-videocall.jpg";
import imgWomenVideoChatting from "./assets/desktop/image-women-videochatting.jpg";
import imgMenInMeeting from "./assets/desktop/image-men-in-meeting.jpg";
import imgManTexting from "./assets/desktop/image-man-texting.jpg";

const mainImgs = [
  {
    img: imgWomanVideocall,
    text: "Woman in Videocall",
  },
  {
    img: imgWomenVideoChatting,
    text: "Women VideoChatting",
  },
  {
    img: imgMenInMeeting,
    text: "Man in a Metting",
  },
  {
    img: imgManTexting,
    text: "Man Texting",
  },
];

function Section1() {
  return (
    <div className="flex flex-col items-center gap-15 p-8 pb-16">
      <div className="flex flex-col items-center">
        <div className="h-20 w-px bg-[#d1d1df]"></div>
        <p className="rounded-full border-1 border-[#d1d1df] px-5 py-4 font-[900] text-[#87879d]">
          01
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {mainImgs.map((image, index) => (
          <div key={index}>
            <img
              src={image.img}
              alt={image.text}
              className="max-h-36 max-w-148 rounded-lg xl:max-h-65 xl:max-w-64"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col text-center md:max-w-[504px]">
        <p className="pb-4 text-xs font-[900] tracking-[0.3em] text-[#4d96a9] uppercase">
          built for modern use
        </p>
        <h2 className="pb-8 text-3xl font-[900] text-[#28283d] md:text-4xl lg:text-[40px]">
          Smarter meeting, all in one place
        </h2>
        <p className="text-[#87879d] lg:text-lg">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </div>
  );
}

export default Section1;
