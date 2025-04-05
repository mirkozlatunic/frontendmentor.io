import React from "react";

function Form() {
  return (
    <div className="flex flex-col justify-center gap-6 px-6 md:px-0">
      <form action="" className="flex flex-col gap-2">
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
