import React from "react";
import ExperienceInfo from "../utils/ExperienceInfo";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="w-full pt-8 sm:pt-14 px-1 sm:px-24">
         <h2 className="p-4 sm:pb-6 md:pb-8 sm:text-center font-heading text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
          Experience
        </h2>
        <div className="flex flex-col items-center gap-6">
          {
            
            ExperienceInfo.map((experience, index)=>{
              return <ExperienceCard key={index} experience={experience}/>
            })
          }
        </div>
      </section>
    </>
  );
};

export default Experience;
