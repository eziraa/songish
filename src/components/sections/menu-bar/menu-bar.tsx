import { Menu, MenuBar, MenuBarItem } from "./components.style";
import { IoAlbumsSharp, IoHomeSharp } from "react-icons/io5";
import { CgPlayListAdd } from "react-icons/cg";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineReplay10, MdFavorite } from "react-icons/md";
import { RiLogoutCircleLine, RiPlayListFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import {
  loadMyFavoriteSongsRequested,
  loadMySongsRequested,
  logoutRequested,
  setMajorTask,
  setMinorTask,
} from "../../../store/user/userSlice";
import {
  CREATE_PLAYLIST,
  SEE_ALL_SONGS,
  SEE_MY_FAVORITE_SONGS,
  SEE_MY_SONGS,
  SEE_YOUR_PLAYLIST,
  UPLOAD_SONG,
} from "../../../config/constants/user-current-task";
import { loadSongsRequested } from "../../../store/song/songSlice";
import { loadPlaylistsRequested } from "../../../store/playlist/playlistSlice";
import { useContext, useState } from "react";
import {
  ThemeContext,
  ThemeContextType,
} from "../../../contexts/theme_context";
import { SmallSpinner } from "../spinner/spinner";
interface MenuBarProps {
  smoothScroll: (id: string) => void;
}
const LeftMenu = ({}: MenuBarProps) => {
  const dispatcher = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const { theme } = useContext<ThemeContextType>(ThemeContext);

  const [currMenuBar, setCurrentMenuBar] = useState(-1);
  return (
    <Menu>
      <MenuBar>
        {[
          { icon: <IoHomeSharp />, text: "Home" },
          { icon: <IoAlbumsSharp />, text: "Add Musics" },
          { icon: <FaCircleUser />, text: "See All Musics" },
          { icon: <MdOutlineReplay10 />, text: "Your musics" },
          { icon: <MdFavorite />, text: "Your Favorite" },
          { icon: <RiPlayListFill />, text: "Your Playlist" },
        ].map((item, index) => {
          return (
            <MenuBarItem
              style={
                index === currMenuBar
                  ? {
                      backgroundColor: theme.aboutBackground,
                    }
                  : {}
              }
              onClick={() => {
                const element = document.getElementById("content");
                element?.scrollIntoView({ behavior: "smooth" });
                setCurrentMenuBar(index);
                index == 1 && dispatcher(setMinorTask(UPLOAD_SONG));
                if (index == 2) {
                  dispatcher(setMajorTask(SEE_ALL_SONGS));
                  dispatcher(loadSongsRequested());
                }
                if (index === 3) {
                  dispatcher(setMajorTask(SEE_MY_SONGS));
                  dispatcher(
                    loadMySongsRequested({
                      user_id: user.user.id,
                    })
                  );
                }
                if (index === 4) {
                  dispatcher(
                    loadMyFavoriteSongsRequested({
                      user_id: user.user.id,
                    })
                  );
                  dispatcher(setMajorTask(SEE_MY_FAVORITE_SONGS));
                }
                if (index == 5) {
                  dispatcher(loadPlaylistsRequested(user.user.id));
                  dispatcher(setMajorTask(SEE_YOUR_PLAYLIST));
                }
              }}
              key={index}
            >
              {item.icon}
              {}
              {item.text}
            </MenuBarItem>
          );
        })}
        <MenuBarItem
          onClick={(e) => {
            e.preventDefault();
            dispatcher(setMinorTask(CREATE_PLAYLIST));
          }}
        >
          <CgPlayListAdd size={20} />
          Add Playlist
        </MenuBarItem>
        <MenuBarItem onClick={() => dispatcher(logoutRequested())}>
          {user.isLogout ? (
            <SmallSpinner />
          ) : (
            <>
              <RiLogoutCircleLine size={20} />
              Logout
            </>
          )}
        </MenuBarItem>
      </MenuBar>
    </Menu>
  );
};

export default LeftMenu;
