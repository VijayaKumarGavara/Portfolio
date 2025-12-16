import { useState, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  function handleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <>
      <header
        className="h-14 px-10 w-full fixed
                  flex justify-between items-center
                  text-light-text dark:text-dark-text
                  shadow-lg z-50 bg-light-bg dark:bg-dark-bg">
        <div
          className="flex items-center gap-1 leading-none cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}>
          <ArrowBackIcon fontSize="small" />
          <span>Back</span>
        </div>

        <div className="cursor-pointer" onClick={handleTheme}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
      </header>
    </>
  );
};

export default Header;
