import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import EducationResume from "../components/EducationResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 mob:pl-8 mob:pr-8 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-8 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="tablet:text-3xl font-bold mob:text-lg">{name}</h1>
              <h2 className="tablet:text-xl mob:text-x mt-5">{resume.tagline}</h2>
              <h2 className="w-5/5 tablet:text-xl mob:text-sm mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-5">
                <Socials />
              </div>
              <hr className="mt-10"></hr>
              <div className="mt-10">
                <h1 className="tablet:text-2xl font-bold mob:text-lg">Experience</h1>
                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <hr className="mt-10"></hr>
              <div className="mt-10">
                <h1 className="tablet:text-2xl font-bold mob:text-lg">Education</h1>
                {resume.education.map(
                  ({ id, universityName, universityDate, universityPara }) => (
                    <EducationResume
                      key={id}
                      universityName={universityName}
                      universityDate={universityDate}
                      universityPara={universityPara}
                    ></EducationResume>
                  )
                )}
              </div>
              <hr className="mt-10"></hr>
              <div className="mt-10">
                <h1 className="tablet:text-2xl font-bold mob:text-lg">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="tablet:text-lg mob:text-sm font-bold">Languages</h2>
                      <ul>
                        {resume.languages.map((language, index) => (
                          <li key={index} className="pt-2 mob:text-sm tablet:text-base">
                            - {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="tablet:text-lg mob:text-sm font-bold">Frameworks</h2>
                      <ul>
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="pt-2 mob:text-sm tablet:text-base">
                            - {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="tablet:text-lg mob:text-sm font-bold">Others</h2>
                      <ul>
                        {resume.others.map((other, index) => (
                          <li key={index} className="pt-2 mob:text-sm tablet:text-base">
                            - {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
