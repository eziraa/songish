import React from "react";
import Header from "../../sections/header/header";
import NavBar from "../../sections/nav-bar/nav-bar";
import { Home, Main } from "./components.style";
import LeftMenu from "../../sections/menu-bar/menu-bar";
import { RecentSection } from "../../sections/recent-songs/recent";
import AboutPage from "../../sections/about/about";
import Footer from "../../sections/footer/footer";
import { ScrollBar } from "../utils/scrollbar.style";

const HomePage = () => {
  return (
    <ScrollBar>
      <Home>
        <Header>
          <NavBar />
        </Header>
        <LeftMenu />
        <Main>
          <RecentSection />
          <AboutPage />
          <Footer />
        </Main>
      </Home>
    </ScrollBar>
  );
};

export default HomePage;
