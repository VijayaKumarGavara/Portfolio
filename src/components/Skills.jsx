import SkillsInfo from "../utils/SkillsInfo";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="w-full py-16 sm:py-24 px-1 sm:px-24">
        <h2 className="p-4 font-heading text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
          Skills
        </h2>
        <div className="w-full flex flex-col items-center gap-4">
          {SkillsInfo.map((skillGroup, index) => {
            return (
              <SkillCard
                key={index}
                category={skillGroup.category}
                skills={skillGroup.skills}
              />
            );
          })}
        </div>
        <p className="py-6 sm:px-32 font-body text-sm rounded-md
            bg-light-bg dark:bg-dark-bg
            text-light-text dark:text-dark-text">Tools and technologies I use regularly and continue improving through hands-on projects.</p>
      </section>
    </>
  );
};

export default Skills;
