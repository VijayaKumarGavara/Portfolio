import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Navbar = () => {
  const [showNavbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  function handleClick() {
    setNavbar(!showNavbar);
  }
  function handleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // reference to menu
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setNavbar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className="px-10 py-3 sm:py-0 sm:my-5 w-full  flex flex-row justify-between items-center fixed shadow-lg sm:shadow-none z-50">
        <div>{/* logo */}</div>
        <div
          ref={menuRef}
          className={`flex flex-col gap-y-1 absolute top-0 left-0 w-full items-center text-base font-heading
          bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text font-semibold
          shadow-xl leading-10
          overflow-hidden transition-all duration-300 ease-in-out
          ${showNavbar ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          sm:border-2 sm:border-slate-300 sm:bg-transparent sm:static sm:max-h-none sm:opacity-100 
          sm:w-auto sm:rounded-xl sm:px-6 sm:py-1 sm:gap-x-6 sm:flex sm:flex-row sm:shadow-none`}>
          <Link
            to="/"
            onClick={() => setNavbar(false)}
            className="hover:text-light-text2 hover:dark:text-dark-text2"> About</Link>
          <Link
            to="#skills"
            onClick={() => setNavbar(false)}
            className="hover:text-light-text2 hover:dark:text-dark-text2">
            Skills
          </Link>
          <Link
            to="#projects"
            onClick={() => setNavbar(false)}
            className="hover:text-light-text2 hover:dark:text-dark-text2">
            Projects
          </Link>
          <Link
            to="#experience"
            onClick={() => setNavbar(false)}
            className="hover:text-light-text2 hover:dark:text-dark-text2">
            Experience
          </Link>
          <Link
            to="#contact"
            onClick={() => setNavbar(false)}
            className="hover:text-light-text2 hover:dark:text-dark-text2">
            Contact
          </Link>
          <div
            className="cursor-pointer sm:hidden"
            onClick={() => {
              handleTheme();
              setNavbar(false);
            }}>
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
        </div>
        <div
          className="hidden sm:block cursor-pointer"
          onClick={() => {
            handleTheme();
            setNavbar(false);
          }}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
        <div
          ref={buttonRef}
          aria-label="Toggle navigation"
          onClick={handleClick}
          className="cursor-pointer inline-block text-center text-black dark:text-white border-black border dark:border-white text-lg rounded-md max-h-min  px-3 py-1 sm:hidden z-50">
          ☰
        </div>
      </header>
    </>
  );
};

export default Navbar;
