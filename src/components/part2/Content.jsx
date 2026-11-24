
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div className={`card ${theme}`}>
        <h3>Card 1</h3>
        <p>This is the first card.</p>
      </div>

      <div className={`card ${theme}`}>
        <h3>Card 2</h3>
        <p>This is the second card.</p>
      </div>

      <div className={`card ${theme}`}>
        <h3>Card 3</h3>
        <p>This is the third card.</p>
      </div>
    </main>
  );
}

export default Content;
