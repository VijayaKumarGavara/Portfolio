import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LeetcodeIcon from "../assets/LeetcodeIcon";
const Hero = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center gap-6 bg-light-bg dark:bg-dark-bg">
        <div className="flex flex-col sm:flex-row sm:gap-x-2 text-light-text dark:text-dark-text font-heading font-bold text-4xl leading-loose tracking-wide">
          <p className="text-4xl sm:text-5xl font-heading text-light-text2 dark:text-dark-text2">
            Hi, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading cursor-pointer">
            Vijaya Kumar Gavara
          </h1>
        </div>
        <p className="p-2 sm:p-0 text-center text-base font-body text-light-text2 dark:text-dark-text2 w-full sm:w-5/12">
          I'm a developer, who learns by building and enjoy creating simple,
          meaningful solutions that connect UI to backend.
        </p>
        <div className="flex flex-row gap-x-5">
          <a
            href="/VijayaKumarGavara_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in new tab"
            className="bg-brand-500 hover:bg-brand-600 focus:ring-2 focus:ring-brand-200 text-white dark:text-dark-text font-semibold px-4 py-2 rounded transition transform hover:scale-105">
            Resume
          </a>
          <a href="#contact" className="bg-transparent border border-light-border dark:border-dark-border text-light-text font-semibold cursor-pointer 
          focus:ring-2 focus:ring-brand-200
          dark:text-dark-text px-3 py-2 rounded transition transform hover:scale-105">
            Contact Me
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-5">
          <a
            href="https://www.linkedin.com/in/gavara-vijaya-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="transition transform hover:scale-110 hover:text-brand-500">
            <LinkedInIcon/>
          </a>
          <a
            href="https://leetcode.com/u/Vijay18_24/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode (opens in new tab)"
            className=" hover:text-brand-500 transition transform hover:scale-110">
            <LeetcodeIcon/>
          </a>
          <a
            href=""
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
      </section>
    </>
  );
};

export default Hero;
