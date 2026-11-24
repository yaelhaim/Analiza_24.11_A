import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { UserContext } from "./context/UserContext";
import UserName from "./components/part1/UserName";
import UserGreeting from "./components/part1/UserGreeting";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/part2/Header";
import Content from "./components/part2/Content";
import Footer from "./components/part2/Footer";

import "./App.css";

function App() {
  const [userName] = useState("Alice");
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <UserContext.Provider value={userName}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`app ${theme}`}>
          <section>
            <h1>Part 1</h1>
            <UserName />
            <UserGreeting />
          </section>

          <hr />
          <section>
            <h1>Part 2</h1>
            <Header />
            <Content />
            <Footer />
          </section>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
