import { Menu, MenuBar, MenuBarItem } from "./componets.style";
import { IoAlbumsSharp, IoHomeSharp } from "react-icons/io5";
import { CgPlayListAdd } from "react-icons/cg";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineReplay10, MdFavorite } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";

const LeftMenu = () => {
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
            <MenuBarItem key={index}>
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
