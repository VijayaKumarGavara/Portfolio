import { useState, useEffect, useRef } from "react";
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
      <header className="px-10 py-3 sm:py-0 sm:my-5 w-full  flex flex-row justify-between items-center fixed bg-light-bg dark:bg-dark-bg sm:bg-transparent sm:dark:bg-transparent text-light-text dark:text-dark-text shadow-lg sm:shadow-none z-50">
        <div>{/* logo */}</div>
        <div
          ref={menuRef}
          className={`flex flex-col gap-y-1 absolute top-0 left-0 w-full items-center text-base font-heading
         font-semibold bg-light-card dark:bg-dark-card
          shadow-xl leading-10
          overflow-hidden transition-all duration-300 ease-in-out
          ${showNavbar ? "max-h-96" : "max-h-0 "}
          sm:border-2 sm:border-slate-300 sm:static sm:max-h-none 
          sm:w-auto sm:rounded-xl sm:px-6 sm:py-1 sm:gap-x-6 sm:flex sm:flex-row sm:shadow-none`}>
          <a
            href="#about"
            onClick={() => setNavbar(false)}
            className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
            {" "}
            About
          </a>
          <a
            href="#skills"
            onClick={() => setNavbar(false)}
            className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setNavbar(false)}
            className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setNavbar(false)}
            className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setNavbar(false)}
            className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
            Contact
          </a>
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
          className="cursor-pointer inline-block text-center text-black dark:text-white border-black border dark:border-white text-lg rounded-md max-h-min  px-3 py-1 sm:hidden">
          ☰
        </div>
      </header>
    </>
  );
};

export default Navbar;
