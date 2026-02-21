import { Link } from "react-router-dom";
const ProjectCard = ({ title, shortDescription, links, slug }) => {
  return (
    <>
      <div className="p-4 w-full min-h-max sm:max-w-sm flex flex-col border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card rounded-lg hover:shadow-lg hover:-translate-y-1 transition">
        <h3 className="font-heading text-base sm:text-lg font-medium text-light-text dark:text-dark-text p-2">
          {title}
        </h3>
        <p className="font-body text-sm sm:text-base text-light-text2 dark:text-dark-text2">
          {shortDescription}
          {
            <Link
              to={`projects/${slug}`}
              rel="noopener noreferrer"
              target="_self"
              className="text-sm sm:text-base text-accent hover:underline">
              View More.
            </Link>
          }
        </p>
        <div className="flex flex-row gap-6 p-2">
          {links?.live && (
            <a
              href={links?.live}
              rel="noopener noreferrer"
              target="_blank"
              className="text-base text-accent hover:underline">
              Live
            </a>
          )}
          <a
            href={links?.github}
            rel="noopener noreferrer"
            target="_blank"
            className="text-base text-accent hover:underline">
            Code Base
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
