import { useParams } from "react-router-dom";
import ProjectInfo from "../utils/ProjectInfo";
import Navbar from "./Navbar";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = ProjectInfo.find((p) => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <>
      <Navbar />
      <section className="w-full py-16 sm:py-24 px-4 sm:px-24">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4 text-light-text2">{project.overview}</p>

        {/* Tech stack */}
        {/* Features */}
        {/* Challenges */}
        {/* Links */}
      </section>
    </>
  );
};

export default ProjectDetails;
