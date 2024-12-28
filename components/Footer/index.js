import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-20 laptop:mt-30 p-2 laptop:p-0">
        <div>
          <h1 className="tablet:mt-10 tablet:text-2xl mobtext-bold mob:text-1xl">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK TOGETHER
            </h1>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="">
          <a className="underline underline-offset-1">KyungRim</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
