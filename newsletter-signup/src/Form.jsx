import { useState } from "react";
import Success from "./Success";

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
    // Button will stay in clicked state until form processes
  };

  if (isSubmitted) {
    return <Success userEmail={email} />;
  }

  return (
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
              : "bg-[#242742]"
          } mt-4 px-10 py-4 font-bold text-white`}
          type="submit"
          onClick={handleButtonClick}
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Form;
