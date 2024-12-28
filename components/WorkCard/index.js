import React, { useEffect } from "react";
import Button from "../Button/index";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkCard = ({ img, name, description, date, role, enviroment, onClick, git }) => {

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <div className="desktop:flex flex-start gap-10 desktop:mt-80 tablet:mt-20 tablet:block mob:mt-10" data-aos="fade-up">
      <p className="img tablet:w-4/5 mob:w-full mob:mb-10 desktop:mb-0">
        <img
          alt={name}
          className="hover:scale-110 transition-all ease-out duration-300 rounded-2xl shadow-xl rounded-2xl "
          src={img}
        ></img>
      </p>
      <div className="infoBox w-full tablet:mt-10 desktop:mt-0">
        <h1 className="tablet:text-3xl font-bold mb-3 mob:text-2xl">
          {name}
        </h1>
        <h2 className="opacity-50 mb-6 mob:text-sm ">
          {description}
        </h2>  
        <div>
          {date ? 
            <p className="tablet:flex mb-3 mob:block mob:text-sm">
              <span className="font-bold tablet:w-1/5 mob:w-full mob:block tablet:inline-block">프로젝트 기간</span>
              <span className="tablet:w-4/5 mob:w-full">{date}</span>
            </p>
            :
            ""
          }
          <p className="tablet:flex mb-3 mob:block mob:text-sm">
            <span className="font-bold tablet:w-1/5 mob:w-full mob:block tablet:inline-block">맡은 역할</span>
            <span className="tablet:w-4/5 mob:w-full">{role}</span>
          </p>
          <p className="tablet:flex mob:block mob:text-sm">
            <span className="font-bold tablet:w-1/5 mob:w-full mob:block tablet:inline-block">사용 스킬</span>
            <span className="tablet:w-4/5 mob:w-full">{enviroment}</span>
          </p>
        </div>
        <div className="links mt-6 pt-6 border-t border-neutral-400">
          {onClick ? 
            <Button
              onClick={() => window.open(onClick)}
              type="primary"
            >
              Link
            </Button>
            :
            ""
          }
          {git ? 
            <Button
              onClick={() => window.open(git)}
              type="primary"
            >
              Git
            </Button>
            :
            ""
          }
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
