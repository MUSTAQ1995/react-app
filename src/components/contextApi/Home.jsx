import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <div style={styles}>
      {theme && <h1>{theme.toUpperCase()} THEME</h1>}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
