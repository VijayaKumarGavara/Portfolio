import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const ExperienceCard = ({ experience }) => {
  const {
    type,
    role,
    organization,
    duration,
    description,
    techStack,
    location,
    certificateLink,
  } = experience;
  return (
    <>
      <div className="p-4 w-full max-w-3xl min-h-max  flex flex-col border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card rounded-lg hover:shadow-lg hover:-translate-y-1 transition">
        <span className="text-xs px-2 py-0.5 w-max rounded border border-light-border dark:border-dark-border">
          {type === "internship" ? "Internship" : "Academic Project"}
        </span>

        <h3 className="font-heading text-lg sm:text-xl font-semibold flex items-center gap-3 text-light-text dark:text-dark-text p-2">
          {role}
          {" - "}
          {organization}
        </h3>
        <h4 className="font-body text-base  text-light-text dark:text-dark-text p-2 flex items-center gap-3">
          {duration}{" "}
          <span>
            <LocationOnIcon fontSize="small" />
            {location}
          </span>
        </h4>
        <ul className="pl-5 space-y-1 font-body text-light-text2 dark:text-dark-text2 ">
          {description.map((d, index) => (
            <li key={index} className="list-disc leading-relaxed">
              {d}
            </li>
          ))}
        </ul>
        <div className="mt-3 text-sm">
          <span className="font-medium text-light-text dark:text-dark-text">
            Tech:
          </span>{" "}
          <span className="text-light-text2 dark:text-dark-text2">
            {techStack.join(", ")}
          </span>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
