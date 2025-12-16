import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
const Overview = ({ title, overview, problem, solution, links }) => {
  return (
    <>
      <div className="w-full pt-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col gap-4">
        <h2 className="px-4 font-heading text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
          {title}
        </h2>
        <div className="px-4 flex  gap-4 font-body  text-sm text-accent">
          {links.live && (
            <a
              href={links.live}
              rel="noopener noreferrer"
              target="_blank"
              className="">
              Live
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              rel="noopener noreferrer"
              target="_blank"
              className="">
              Code Base
            </a>
          )}
        </div>
        <p className="font-body text-base sm:text-lg  text-light-text2 dark:text-dark-text2 ">
          {overview}
        </p>

        <div className="">
          <h4 className="font-heading font-bold text-light-text dark:text-dark-text flex items-center gap-2">
            <ErrorOutlineOutlinedIcon />
            Problem Statement
          </h4>
          <p className="py-2 font-body text-light-text2 dark:text-dark-text2">
            {problem}
          </p>
        </div>
        <div className="">
          <h4 className="font-heading font-bold text-light-text dark:text-dark-text flex items-center gap-2">
            <EmojiObjectsOutlinedIcon />
            Solution
          </h4>
          <p className="py-2 font-body text-light-text2 dark:text-dark-text2">
            {solution}
          </p>
        </div>
      </div>
    </>
  );
};

export default Overview;
