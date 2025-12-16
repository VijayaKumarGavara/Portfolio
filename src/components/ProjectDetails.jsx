import { useParams } from "react-router-dom";
import Header from "./project-details-components/Header";
import ProjectInfo from "../utils/ProjectInfo";
import Overview from "./project-details-components/Overview";
import Features from "./project-details-components/Features";
import TechStack from "./project-details-components/TechStack";
const ProjectDetails = () => {
  const { slug } = useParams();

  const project = ProjectInfo.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <h3>Sorry, Project Not Found</h3>
      </>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg ">
        <Header />
        <Overview
          title={project?.title}
          overview={project?.overview}
          problem={project?.problem}
          solution={project?.solution}
          links={project?.links}
        />
        <div className="pt-10 h-max flex flex-col justify-center md:flex-row">
          <Features features={project?.features} />
          <TechStack techStack={project?.techStack} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
