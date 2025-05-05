import React from "react";
import logo from "./assets/logo.svg";

function Header() {
  return (
    <div>
      <header className="flex items-center">
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default Header;
