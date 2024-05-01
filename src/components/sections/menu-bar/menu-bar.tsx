import { Menu, MenuBar, MenuBarItem } from "./componets.style";
import { IoAlbumsSharp, IoHomeSharp } from "react-icons/io5";
import { CgPlayListAdd } from "react-icons/cg";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineReplay10, MdFavorite } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { useAppDispatch } from "../../../utils/customHook";
import { setMajorTask, setMinorTask } from "../../../store/user/userSlice";
import {
  SEE_ALL_SONGS,
  UPLOAD_SONG,
} from "../../../config/constants/user-current-task";
import { loadSongsRequested } from "../../../store/song/songSlice";

const LeftMenu = () => {
  const dispatcher = useAppDispatch();

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
              onClick={(e) => {
                e.preventDefault();
                index == 1 && dispatcher(setMinorTask(UPLOAD_SONG));
                if (index == 2) {
                  dispatcher(setMajorTask(SEE_ALL_SONGS));
                  dispatcher(loadSongsRequested());
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
        <MenuBarItem>
          <CgPlayListAdd size={20} />
          Add Playlist
        </MenuBarItem>
        <MenuBarItem
          style={{
            color: "var(--color-primary-blue)",
          }}
        >
          <CgPlayListAdd size={20} />
          Logout
        </MenuBarItem>
      </MenuBar>
    </Menu>
  );
};

export default LeftMenu;
