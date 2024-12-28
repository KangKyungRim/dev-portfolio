import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="tablet:text-lg mob:text-sm laptop:w-3/5 mob:w-full">
        <h2>{dates}</h2>
        <h3 className="tablet:text-sm mob:text-xs opacity-50 tablet:mt-0 mob:mt-2">{type}</h3>
      </div>
      <div className="laptop:w-5/5 mob:w-full mob:mt-3 tablet:mt-3 desktop:mt-0">
        <h2 className="tablet:text-lg mob:text-base font-bold">{position}</h2>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul>
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                - {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
