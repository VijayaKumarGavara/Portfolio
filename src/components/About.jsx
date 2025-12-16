import { useState, useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import AboutCard from "./AboutCard";
import EducationCard from "./EducationCard";
import EducationDetails from "../utils/MyEducationInfo";
import MyInfo from "../utils/MyInfo";
import QuickInfo from "../utils/QuickInfo";
export default function About() {
  const [index, setIndex] = useState(0);
  const len = QuickInfo.length;
  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, 10000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <h2 className="p-4 sm:pb-6 md:pb-8 sm:text-center font-heading text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
          About Me
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-3 sm:flex-[1.2] min-w-0  w-full">
            {MyInfo.map(({ Icon, heading, content }, index) => (
              <AboutCard
                key={index}
                icon={<Icon />}
                heading={heading}
                content={content}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-1 min-w-0 w-full">
            <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card shadow-sm hover:shadow-md transition w-full h-min">
              <h3 className="font-heading font-semibold tracking-wider text-xl sm:text-2xl p-2 m-2 flex items-center gap-2">
                <SchoolIcon />
                My Education
              </h3>
              <div className="flex flex-col gap-4 font-body text-base text-light-text2 dark:text-dark-text2 ">
                {EducationDetails.map(
                  ({ years, degree, stream, college, location }, index) => {
                    return (
                      <EducationCard
                        key={index}
                        years={years}
                        degree={degree}
                        stream={stream}
                        college={college}
                        location={location}
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card shadow-sm hover:shadow-md  text-light-text2 dark:text-dark-text-2 transition   w-full h-min">
              <h4 className="p-2 font-heading text-base sm:text-xl font-medium text-light-text dark:text-dark-text flex items-center gap-2">
                <InfoOutlineIcon />
                {QuickInfo[index]?.title}
              </h4>
              <p className="font-body text-base">
                {QuickInfo[index]?.content}{" "}
                <span>
                  <a
                    href={QuickInfo[index]?.link}
                    rel="noopener noreferrer"
                    className="text-accent ">
                    {QuickInfo[index]?.cta
                  }
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
