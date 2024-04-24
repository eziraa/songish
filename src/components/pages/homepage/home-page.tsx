import React from "react";
import Header from "../../sections/header/header";
import NavBar from "../../sections/nav-bar/nav-bar";
import { Home, Main } from "./components.style";

const HomePage = () => {
  return (
    <Home>
      <Header>
        <NavBar />
      </Header>
      <Main />
    </Home>
  );
};

export default HomePage;
