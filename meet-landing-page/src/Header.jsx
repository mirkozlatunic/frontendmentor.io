import React from "react";
import logo from "./assets/logo.svg";

function Header() {
  return (
    <div>
      <header className="flex w-full items-center justify-between px-8.5 py-8 md:px-15">
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default Header;
