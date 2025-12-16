import { lazy, Suspense } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
const GithubCommit = lazy(() => import("./GithubCommit"));

const Footer = () => {
  return (
    <>
      <div className="w-full mt-8 sm:mt-14 bg-light-card dark:bg-dark-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  pt-8 px-4 sm:px-6 md:px-12 lg:px-24 ">
          <div>
            <h2 className="m-2 font-heading text-base font-medium text-light-text dark:text-dark-text flex flex-col md:flex-row gap-4">
              <span>Vijaya Kumar Gavara</span> <span>Web Developer</span>
            </h2>
          </div>
          <div className="m-2 flex flex-wrap gap-x-2">
            <a
              href="#about"
              className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
              {" "}
              About
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
              Projects
            </a>
            <a
              href="#experience"
              className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
              Experience
            </a>
            <a
              href="#contact"
              className="cursor-pointer hover:text-light-text2 hover:dark:text-dark-text2">
              Contact
            </a>
          </div>
          <div className="m-2 flex flex-row items-center gap-x-5">
            <a
              href="https://www.linkedin.com/in/gavara-vijaya-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in new tab)"
              className="transition transform hover:scale-110 hover:text-brand-500">
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/VijayaKumarGavara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in new tab)"
              className="hover:text-brand-500 transition transform hover:scale-110">
              <GitHubIcon />
            </a>
            <a
              href="mailto:vijayakumargvara@gmail.com"
              aria-label="Send email"
              className="hover:text-brand-500 transition transform hover:scale-110">
              <EmailIcon />
            </a>
          </div>
          <span className="my-2 font-body text-light-text2 dark:text-dark-text2">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <span className="my-2 text-light-text2 dark:text-dark-text2">
            Built with React and Tailwind CSS.
          </span>
          <Suspense
            fallback={
              <span className="my-2 text-light-text2 dark:text-dark-text2">
                Last updated: —
              </span>
            }>
            <GithubCommit />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Footer;
