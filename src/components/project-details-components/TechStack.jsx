import ApiIcon from "@mui/icons-material/Api";
import TechStackCard from "./TechStackCard";
const TechStack = ({ techStack }) => {
  return (
    <>
      <div className="w-full py-2 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col gap-4">
        <h4 className="font-heading font-bold text-light-text dark:text-dark-text flex items-center gap-2">
          <ApiIcon />
          TechStack
        </h4>
        <div className="w-full flex flex-col items-start gap-1">
          {Object.keys(techStack).map((key, index) => {
            return (
              <TechStackCard
                key={index}
                category={key}
                skills={techStack[key]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechStack;
