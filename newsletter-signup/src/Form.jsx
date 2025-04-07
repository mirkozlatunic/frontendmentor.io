import { useState } from "react";

const isEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);

function Form() {
  const [value, setValue] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const validateAndSubmitForm = (e) => {
    e.preventDefault();

    const errors = {};

    if (!isEmail(value.email)) {
      errors.email = "Valid email required";
    }

    setErrors(errors);

    if (!Object.keys(errors).length) {
      alert(JSON.stringify(value, null, 2));
    }

    const setEmail = (e) => {
      setValue({ ...value, email: e.target.value });
    };
  };

  return (
    <div className="flex flex-col justify-center gap-6 px-6 md:px-0">
      <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="" className="font-bold">
          Email address
        </label>
        <input
          type="email"
          placeholder="ash@loremcompany.com"
          className="rounded-lg border-2 border-[#949494] px-6 py-4 focus:border-[#242742] focus:outline-none active:border-[#242742]"
          required
        />
      </form>
      <button className="cursor-pointer rounded-lg bg-[#242742] px-10 py-4 font-bold text-white">
        Subscribe to monthly newsletter
      </button>
    </div>
  );
}

export default Form;
