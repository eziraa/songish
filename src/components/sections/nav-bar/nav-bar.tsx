import { LOGIN, SIGN_UP } from "../../../config/constants/user-current-task";
import { setMinorTask } from "../../../store/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { UpperNavBar, UpperNavBarItem } from "./components.style";

interface NavBarProps {
  smoothScroll: (id: string) => void;
}
const NavBar = ({ smoothScroll }: NavBarProps) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <UpperNavBar>
      {[
        { name: "About", id: "about" },
        { name: "contact", id: "contact" },
        { name: "Login", id: "log_in" },
        { name: "Sign up", id: "sign_up" },
      ].map((nav, index) => {
        if (user.user.id !== "" && index === 2) return null;
        return (
          <UpperNavBarItem
            key={index}
            onClick={(e) => {
              e.preventDefault();
              index === 0 && smoothScroll(nav.id);
              index === 1 && smoothScroll(nav.id);
              index === 2 && dispatch(setMinorTask(LOGIN));
              index === 3 && dispatch(setMinorTask(SIGN_UP));
            }}
          >
            {nav.name}
          </UpperNavBarItem>
        );
      })}
    </UpperNavBar>
  );
};

export default NavBar;
