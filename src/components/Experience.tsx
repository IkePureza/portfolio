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
      <div className="flex items-center relative w-full mb-10">
        <p className="text-cyan-500 mb-4 mr-3">[1]</p>
        <h2 className="text-glitch text-3xl ml-5">&lt;Experience&gt;</h2>
      </div>
      <div className="container mx-auto w-full h-full">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <hr className="bg-cyan-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start !mb-10 md:text-end ">
              <time className="font-mono italic">2024 - Current</time>
              <div className="text-lg font-black mb-5">
                Fullstack Software Engineer{" "}
                <a
                  className="text-cyan-500"
                  href="https://www.securecodewarrior.com/"
                >
                  @SCW
                </a>
              </div>
              Contributing to enhancing and maintaining our cybersecurity
              learning platform. My focus is on improving the developer
              experience for high-profile clients, including VISA, Mastercard,
              GitHub, and Morgan Stanley.
            </div>
            <hr className="bg-cyan-500" />
          </li>
          <li>
            <hr className="bg-cyan-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2021 - 2024</time>
              <div className="text-lg font-black mb-5">
                Fullstack Software Engineer{" "}
                <a className="text-cyan-500" href="https://www.sidekicker.com">
                  @Sidekicker
                </a>
              </div>
              Worked closely with staff and principal engineers to deliver
              infrastructure and developer enabling systems. Took responsibility
              to architect and implement a business event logging system to be
              used by developers and staff within the company. Worked on
              implementing elastic search to our apis to increase performance.
            </div>
            <hr className="bg-cyan-500" />
          </li>
          <li>
            <hr className="bg-cyan-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start !mb-10 md:text-end">
              <time className="font-mono italic">2019 - 2020</time>
              <div className="text-lg font-black mb-5">
                Associate Software Engineer{" "}
                <a className="text-cyan-500" href="https://www.tribegroup.co/">
                  @Tribe
                </a>
              </div>
              Designed and developed an automated testing suite for TRIBE&#39;s
              Mobiles apps using Appium and for web apps using Cypress.
              Implemented the CI/CD for those automation suites in Buildkite.
              Also worked on some features for the ruby on rails and react
              codebase.
            </div>
            <hr className="bg-cyan-500" />
          </li>
          <li>
            <hr className="bg-cyan-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2018</time>
              <div className="text-lg font-black mb-5">
                Software Engineer Intern <a className="text-cyan-500">@ITC</a>
              </div>
              As a software developer intern at In The Code, I was responsible
              for testing and developing both front-end and back-end features
              for different client projects. I committed to completing various
              tasks weekly within an Agile culture.
            </div>
            <hr className="bg-cyan-500" />
          </li>
        </ul>
      </div>
    </div>
  );
};
