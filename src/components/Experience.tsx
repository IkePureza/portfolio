import React from "react";

export const Experience = () => {
  const skills1 = [
    "TypeScript",
    "Nest.js",
    "System Design",
    "React",
    "Terraform",
    "AWS",
  ];
  const skills2 = ["ROR", "Cypress", "Appium", "React", "Buildkite"];
  const skills3 = ["Nodejs", "Angular", "MongoDB", "Linux"];
  return (
    <div className="py-28" id="experience">
      <div className="flex items-center relative w-full">
        <p className="text-cyan-500 mb-4 mr-3">[1]</p>
        <h2 className="text-glitch text-3xl ml-5">&lt;Experience&gt;</h2>
      </div>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="block left-[50%] w-px absolute h-full bg-cyan-500"></div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl px-3 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-sm text-white">
                2021 - current
              </h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-xl">
                Associate Software Engineer (Platform Team){" "}
                <a className="text-cyan-400"> @Sidekicker</a>
              </h3>
              <p className="text-sm leading-snug tracking-wide text-opacity-100">
                Working closely with staff and principal engineers to deliver
                infrastructure and developer enabling systems. Took
                responsibility to design and implement a business event logging
                system to be used by developers and staff within the company.
                Worked on implementing elastic search to our apis to increase
                performance.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-y-3 p-0 ml-5 overflow-hidden list-none">
                {skills1.map((skill, i) => (
                  <li
                    className="relative text-sm mb-2 pl-5 before:content-['>'] before:text-xs before:align-middle before:mr-2 before:text-cyan-500"
                    key={i}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl px-3 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-sm">
                2019 - 2020
              </h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                Associate Software Engineer (QA){" "}
                <a className="text-cyan-400">@Tribe</a>
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Designed and developed an automated testing suite for
                TRIBE&#39;s Mobiles apps using Appium and for web apps using
                Cypress. Implemented the CI/CD for those automation suites in
                Buildkite. Also worked on some features for the ruby on rails
                and react codebase.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-y-3 p-0 ml-5 overflow-hidden list-none">
                {skills2.map((skill, i) => (
                  <li
                    className="relative text-sm mb-2 pl-5 before:content-['>'] before:text-xs before:align-middle before:mr-2 before:text-cyan-500"
                    key={i}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 shadow-xl bg-gray-800 px-3 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-sm">
                2018 - 2019
              </h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-xl">
                Intern Software Engineer{" "}
                <a className="text-cyan-400">@InTheCode</a>
              </h3>
              <p className="text-sm leading-snug tracking-wide text-opacity-100">
                As a software developer intern at In The Code, I was responsible
                for testing and developing both front-end and back-end features
                for different client projects. I committed to completing various
                tasks weekly within an Agile culture.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-y-3 p-0 ml-5 overflow-hidden list-none">
                {skills3.map((skill, i) => (
                  <li
                    className="relative text-sm mb-2 pl-5 before:content-['>'] before:text-xs before:align-middle before:mr-2 before:text-cyan-500"
                    key={i}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
