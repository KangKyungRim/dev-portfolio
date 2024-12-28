import React from "react";

const EducationResume = ({ universityName, universityDate, universityPara }) => {

  return (
    <div className="mt-5">
      <h2 className="tablet:text-lg mob:text-base font-bold">{universityName}</h2>
      <h3 className="tablet:text-sm mob:text-xs opacity-75 mt-2">
        {universityDate}
      </h3>
      <p className="tablet:text-sm mob:text-xs mt-2 opacity-50">
        {universityPara}
      </p>
    </div>
  );
};

export default EducationResume;
