import React from "react";

const EducationCard = ({ years, degree, stream, college,location }) => {
  return (
    <>
      <div className="flex gap-x-2 sm:gap-x-4 items-start">
        <h4 className="font-medium font-heading">{years}</h4>
        <div className="p-2 w-max rounded-xl text-light-text2 dark:text-dark-text2 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg shadow-sm hover:shadow-md transition">
          <p className="font-body">
            <span className="font-medium">{degree}</span> {stream?"in":""}
            <span className="font-medium"> {stream?stream:""}</span>
          </p>
          <p className="font-body">
            <span className="font-medium">{college},</span> {location}.
          </p>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
