
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
