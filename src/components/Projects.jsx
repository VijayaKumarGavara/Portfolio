import React from "react";
import ProjectInfo from "../utils/ProjectInfo";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="w-full pt-8 sm:pt-14 px-4 sm:px-16">
        <h2 className="p-4 sm:pb-6 md:pb-8 sm:text-center font-heading text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
          Projects
        </h2>
        <div className="w-full  flex justify-center md:justify-start flex-wrap gap-6">
          {
            ProjectInfo.map((project, index)=>{
              return <ProjectCard key={index} title={project.title} shortDescription={project.shortDescription} links={project.links} slug={project.slug}/>
            })
          }
        </div>
      </section>
    </>
  );
};

export default Projects;
