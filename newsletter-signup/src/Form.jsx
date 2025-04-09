import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Valid email required");
    } else {
      setIsSubmitted(true);
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
    setEmail("");
    setIsButtonClicked(false);
  };

  return (
    <div className="relative">
      {/* Main Form */}
      <div className="flex flex-col justify-center gap-6 px-6 md:px-0">
        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <label htmlFor="email" className="font-bold">
              Email address
            </label>
            {error && <p className="font-bold text-[#FF6155]">{error}</p>}
          </div>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="ash@loremcompany.com"
            className={`rounded-lg border-2 ${
              error
                ? "border-[#FF6155] bg-[#ffe7e6] text-[#FF6155]"
                : "border-[#949494]"
            } px-6 py-4 focus:border-[#242742] focus:outline-none active:border-[#242742]`}
            required
            onChange={handleInputChange}
          />

          <button
            className={`cursor-pointer rounded-lg ${
              isButtonClicked
                ? "bg-gradient-to-r from-[#FF6A3A] to-[#FF527B]"
                : "bg-[#242742] hover:bg-gradient-to-r hover:from-[#FF6A3A] hover:to-[#FF527B]"
            } mt-4 px-10 py-4 font-bold text-white transition duration-300`}
            type="submit"
            onClick={handleButtonClick}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      {/* Success Overlay */}
      {isSubmitted && (
        <div className="bg-opacity-95 fixed inset-0 flex items-center justify-center bg-white md:bg-[#242742]">
          <div className="mx-6 h-full w-full max-w-md bg-white md:h-auto md:rounded-2xl">
            <div className="flex h-full flex-col justify-between p-6 pt-40 md:p-12 md:pt-12">
              <div>
                <div className="mb-10 inline-block rounded-full bg-[#FF6A3A] p-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="mb-6 text-4xl font-bold text-[#242742]">
                  Thanks for subscribing!
                </h2>
                <p className="text-[#242742]">
                  A confirmation email has been sent to{" "}
                  <span className="font-bold">{email}</span>. Please open it and
                  click the button inside to confirm your subscription.
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="mt-80 w-full rounded-lg bg-[#242742] py-4 font-bold text-white transition duration-300 hover:bg-gradient-to-r hover:from-[#FF6A3A] hover:to-[#FF527B] md:mt-12"
              >
                Dismiss message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
