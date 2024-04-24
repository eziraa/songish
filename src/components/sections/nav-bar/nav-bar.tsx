import React from "react";
import { UpperNavBar, UpperNavBarItem } from "./components.style";

const NavBar = () => {
  return (
    <UpperNavBar>
      {[
        { name: "About", id: "about" },
        { name: "contact", id: "contact" },
        { name: "Login", id: "log_in" },
        { name: "Sign up", id: "sign_up" },
      ].map((nav, index) => {
        return <UpperNavBarItem key={index}>{nav.name}</UpperNavBarItem>;
      })}
    </UpperNavBar>
  );
};

export default NavBar;
