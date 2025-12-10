import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setNavbar] = useState(false);
  function handleClick() {
    setNavbar(!showNavbar);
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

  return (
    <>
      <header className="px-5 my-5 w-full flex justify-between sm:justify-center items-center fixed">
        <div>{/* <h1 className='text-xl font-bold'>Vijay</h1> */}</div>
        <div
          ref={menuRef}
          className={`${
            showNavbar ? "flex" : "hidden"
          } flex-col max-h-min absolute top-0 left-0 items-center w-full min-w-max text-base font-sans text-blue-600 py-1 bg-slate-300 sm:border-2 sm:border-b-0 sm:border-slate-300 sm:bg-transparent shadow-lg
            sm:w-auto sm:rounded-xl sm:px-6 sm:py-1 sm:gap-x-6  sm:static sm:flex sm:flex-row`}>
          <Link to="/" onClick={() => setNavbar(false)}>
            About
          </Link>
          <Link to="/skills" onClick={() => setNavbar(false)}>
            Skills
          </Link>
          <Link to="/projects" onClick={() => setNavbar(false)}>
            Projects
          </Link>
          <Link to="/experience" onClick={() => setNavbar(false)}>
            Experience
          </Link>
          <Link to="/contact" onClick={() => setNavbar(false)}>
            Contact
          </Link>
        </div>
        <div
          ref={buttonRef}
          aria-label="Toggle navigation"
          onClick={handleClick}
          className="cursor-pointer inline-block text-center text-white text-lg rounded-md max-h-min bg-blue-500 px-3 py-1 sm:hidden">
          ☰
        </div>
      </header>
    </>
  );
};

export default Navbar;
