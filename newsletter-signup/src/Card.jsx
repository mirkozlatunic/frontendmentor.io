import { useState, useEffect } from "react";
import img from "./assets/images/illustration-sign-up-mobile.svg";
import imgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import checkmark from "./assets/images/icon-list.svg";
import Form from "./Form";

const bullets = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function Card() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="rounded-4xl md:bg-white md:p-10 lg:flex lg:flex-row">
      {isDesktop ? (
        <>
          <div className="flex min-w-md flex-col justify-center pr-16">
            <div className="px-6 pb-12 md:px-0">
              <h1 className="pb-6 text-[56px] font-bold">Stay updated!</h1>
              <p className="pb-6">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul>
                {bullets.map((bullet, index) => (
                  <div className="flex gap-4 pb-2" key={index}>
                    <img src={checkmark} alt="checkmark" />
                    <li>{bullet}</li>
                  </div>
                ))}
              </ul>
            </div>
            <Form />
          </div>
          <img
            src={imgDesktop}
            alt="image"
            className="w-full object-cover md:rounded-2xl"
          />
        </>
      ) : (
        <>
          <img
            src={img}
            alt="image"
            className="w-full object-cover md:rounded-2xl"
          />
          <div className="px-6 py-12 md:px-0">
            <h1 className="pb-6 text-5xl font-bold">Stay update!</h1>
            <p className="pb-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul>
              {bullets.map((bullet, index) => (
                <div className="flex gap-4 pb-2" key={index}>
                  <img src={checkmark} alt="checkmark" />
                  <li>{bullet}</li>
                </div>
              ))}
            </ul>
          </div>
          <Form />
        </>
      )}
    </div>
  );
}

export default Card;
