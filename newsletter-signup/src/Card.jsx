import React from "react";
import img from "./assets/images/illustration-sign-up-mobile.svg";
import checkmark from "./assets/images/icon-list.svg";
import Form from "./Form";

const bullets = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function Card() {
  return (
    <div className="pb-10">
      <img src={img} alt="image" className="w-full object-cover" />
      <div className="px-6 py-12">
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
    </div>
  );
}

export default Card;
