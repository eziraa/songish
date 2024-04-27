import Header from "../../sections/header/header";
import NavBar from "../../sections/nav-bar/nav-bar";
import { Home, Main } from "./components.style";
import LeftMenu from "../../sections/menu-bar/menu-bar";
import { RecentSection } from "../../sections/recent-songs/recent";
import AboutPage from "../../sections/about/about";
import Footer from "../../sections/footer/footer";
import { ScrollBar } from "../../utils/scrollbar.style";
import SignUpPage from "../../sections/sign_up/sign_up";
import SearchComponent from "../../sections/search/search";
import ContactPage from "../../sections/contact/contact";
import { useRef } from "react";

const HomePage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const handleSmoothScroll = (nav: string) => {
    homeRef.current?.querySelector(`#${nav}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ScrollBar>
      <Home ref={homeRef}>
        <Header>
          <SearchComponent />
          <NavBar />
        </Header>
        <LeftMenu />
        <Main>
          <RecentSection />
          <AboutPage />
          <ContactPage />
          <Footer />
          {/* <SignUpPage /> */}
        </Main>
      </Home>
    </ScrollBar>
  );
};

export default HomePage;
