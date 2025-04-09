import React, { useState } from "react";
import sucessIcon from "./assets/images/icon-success.svg";

function Success({ userEmail }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    // Button will stay in clicked state until form processes
  };
  const handleDismiss = () => {
    // Reload the page or navigate back
    window.location.reload();
    handleButtonClick();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex flex-col gap-6">
          <img src={sucessIcon} alt="Success checkmark" className="h-16 w-16" />

          <h1 className="text-4xl font-bold text-[#242742]">
            Thanks for subscribing!
          </h1>

          <p className="text-[#242742]">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{userEmail}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>

          <button
            onClick={handleDismiss}
            className={`mt-4 w-full cursor-pointer rounded-lg ${
              isButtonClicked
                ? "bg-gradient-to-r from-[#FF6A3A] to-[#FF527B]"
                : "bg-[#242742]"
            } mt-4 px-10 py-4 font-bold text-white`}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
