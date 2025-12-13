const AboutCard = ({icon, heading, content}) => {
  return (
    <>
      <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card shadow-sm hover:shadow-md transition">
        <h3 className="font-heading font-semibold tracking-wider text-xl sm:text-2xl p-2 flex items-center gap-2">
          {icon} {
        heading}
        </h3>
        <p className="font-body text-base text-light-text2 dark:text-dark-text2 p-2">
          {content}
        </p>
      </div>
    </>
  );
};

export default AboutCard;
