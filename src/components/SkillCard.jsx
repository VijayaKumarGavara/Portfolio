const SkillCard = ({ category, skills }) => {
  return (
    <div className="w-full sm:max-w-4xl flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-light-border dark:border-dark-border">
      <h3 className="sm:w-48 font-heading text-base sm:text-lg text-light-text dark:text-dark-text">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-md
            bg-light-bg dark:bg-dark-bg
            text-light-text2 dark:text-dark-text2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
export default SkillCard;