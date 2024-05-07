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
import { useRef, useState } from "react";
import LoginPage from "../../sections/login/login";
import Notification from "../../sections/mini-notification/mini-notification";
import SongForm from "../../sections/song_add_update/song-form";
import MusicTable from "../../sections/see_musics_list/display-muiscs";
import PlayerComponent from "../../sections/music_player/music-player";
import { useAppSelector } from "../../../utils/customHook";
import PlaylistForm from "../../sections/add_playlist/add_playlist";
import { PlaylistCard } from "../../sections/see_playlist/playlist-card";
import { FavoriteSongs } from "../../sections/favorite_songs/favorite";

const HomePage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const songs = useAppSelector((state) => state.songs);
  const [popUpIndex, setPopUpIndex] = useState(-1);

  const handleSmoothScroll = (nav: string) => {
    homeRef.current?.querySelector(`#${nav}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    const dropzoneRect = dropzone.getBoundingClientRect();
    if (draggableElement) {
      draggableElement.style.left = `${
        event.clientX + 20 - dropzoneRect.left
      }px`;
      draggableElement.style.top = `${event.clientY + 20 - dropzoneRect.top}px`;
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };
  return (
    <div id="dropzone" onDrop={handleDrop} onDragOver={handleDragOver}>
      {songs.current_song_to_play && <PlayerComponent />}

      <ScrollBar>
        <Home
          ref={homeRef}
          onClick={(e) => {
            !e.currentTarget.classList.contains("pop") &&
              popUpIndex > -1 &&
              setPopUpIndex(-1);
          }}
        >
          <Header>
            <SearchComponent />
            <NavBar smoothScroll={handleSmoothScroll} />
          </Header>
          <LeftMenu />
          <Main>
            <PlaylistCard />
            <MusicTable popUpIndex={popUpIndex} setPopUpIndex={setPopUpIndex} />
            <FavoriteSongs />
            <RecentSection />
            <AboutPage />
            <ContactPage />
            <Footer />
            <LoginPage />
            <SignUpPage />
            <Notification />
            <PlaylistForm />
            <SongForm />
          </Main>
        </Home>
      </ScrollBar>
    </div>
  );
};

export default HomePage;
