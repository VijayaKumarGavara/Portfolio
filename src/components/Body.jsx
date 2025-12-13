import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience"
import Contact from "./Contact"
import Footer from "./Footer";
const Body = () => {
  return (
    <>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text overflow-hidden">
        <Navbar />
        <main className="scroll-smooth">
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Contact/>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Body;
