import { useState, useEffect } from "react";
import imgCircles from "./assets/tablet/image-hero.png";
import imgHeroLeft from "./assets/desktop/image-hero-left.png";
import imgHeroRight from "./assets/desktop/image-hero-right.png";

function Hero() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1280);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden p-8 pt-16 text-center">
      {isDesktop ? (
        <div className="relative grid xl:grid-cols-3">
          <img
            src={imgHeroLeft}
            alt="Leftside Circles"
            className="absolute -left-20"
          />
          <div className="col-start-2 flex flex-col items-center gap-8 px-6 py-8 xl:w-[450px]">
            <h1 className="text-6xl font-[900] text-[#28283d]">
              Group Chat for Everyone
            </h1>
            <p className="text-[#87879d]">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <button className="w-[193px] cursor-pointer rounded-full bg-[#4d96a9] px-10 py-4 font-[900] text-white hover:bg-[#71c0d4]">
                Download{" "}
                <span className="text-[#8fe3f9] hover:text-[#71c0d4]">
                  v1.3
                </span>
              </button>
              <button className="max-w-[161px] cursor-pointer rounded-full bg-[#855fb1] px-10 py-4 font-[900] text-white hover:bg-[#b18bdd]">
                What is it?
              </button>
            </div>
          </div>
          <img
            src={imgHeroRight}
            alt="Rightside Circle"
            className="absolute -right-20"
          />
        </div>
      ) : (
        <>
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
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <button className="w-[193px] cursor-pointer rounded-full bg-[#4d96a9] px-10 py-4 font-[900] text-white hover:bg-[#71c0d4]">
                Download{" "}
                <span className="text-[#8fe3f9] hover:text-[#71c0d4]">
                  v1.3
                </span>
              </button>
              <button className="max-w-[161px] cursor-pointer rounded-full bg-[#855fb1] px-10 py-4 font-[900] text-white hover:bg-[#b18bdd]">
                What is it?
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
