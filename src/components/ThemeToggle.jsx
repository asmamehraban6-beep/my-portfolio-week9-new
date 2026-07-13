import { useEffect, useState } from "react";
import "./ThemeToggle.css";


function ThemeToggle() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );


  useEffect(() => {

    document.body.className = theme;

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);



  const changeTheme = () => {

    setTheme(
      theme === "dark"
      ? "light"
      : "dark"
    );

  };


  return (

    <button
      className="theme-toggle"
      onClick={changeTheme}
    >

      {theme === "dark"
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"
      }

    </button>

  );

}


export default ThemeToggle;