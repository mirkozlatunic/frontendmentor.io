import React, { useState } from "react";
import ThankYou from "../ThankYou/ThankYou";

import "./Main.css";

const Main = () => {
  const numbers = ["1", "2", "3", "4", "5"];
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleClick = (number) => {
    setActive(number);
    setSelectedNumber(number);
  };

  const handleModal = (e) => {
    setShowModal(!showModal);
    e.preventDefault();
  };

  return (
    <form className="rating__content">
      <div className="rating__star">
        <img src="../../assets/icon-star.svg" alt="start" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating__numbers">
        {numbers.map((number, index) => {
          return (
            <div
              className={`${
                number === active
                  ? "rating__numbers-orange"
                  : "rating__numbers-each"
              }`}
              key={index}
              onClick={() => handleClick(number)}
            >
              {number}
            </div>
          );
        })}
      </div>
      <button type="submit" className="rating__button" onClick={handleModal}>
        Submit
      </button>
      {showModal && (
        <ThankYou setShowModal={setShowModal} value={selectedNumber} />
      )}
    </form>
  );
};

export default Main;
