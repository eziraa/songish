import { UpperNavBar, UpperNavBarItem } from "./components.style";

interface NavBarProps {
  smoothScroll: (id: string) => void;
}
const NavBar = ({ smoothScroll }: NavBarProps) => {
  return (
    <UpperNavBar>
      {[
        { name: "About", id: "about" },
        { name: "contact", id: "contact" },
        { name: "Login", id: "log_in" },
        { name: "Sign up", id: "sign_up" },
      ].map((nav, index) => {
        return (
          <UpperNavBarItem
            key={index}
            onClick={(e) => {
              e.preventDefault();
              index === 0 && smoothScroll(nav.id);
              index === 1 && smoothScroll(nav.id);
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
