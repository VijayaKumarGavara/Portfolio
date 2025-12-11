import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white">
        <Navbar />
        <main className="pt-20 font-body">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Body;
