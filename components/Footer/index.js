import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-12 sm:mt-20 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-xl sm:text-2xl tablet:text-2xl font-bold border-b pb-2 sm:border-none sm:pb-0">
            Contact.
          </h1>
          <div className="mt-6 sm:mt-10">
            <h1 className="text-2xl sm:text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl leading-snug font-bold">
              LET&apos;S WORK TOGETHER
            </h1>
            <div className="mt-6 sm:mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="text-xs sm:text-sm mt-8 laptop:mt-10 p-2 laptop:p-0 text-gray-500 dark:text-gray-400">
        Made With ❤ by{" "}
        <Link href="/" passHref>
          <a className="underline underline-offset-2 font-medium hover:text-black dark:hover:text-white transition-colors">
            KyungRim
          </a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;