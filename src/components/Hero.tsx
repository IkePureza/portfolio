import React from "react";

export const Hero = () => {
  const one = (
    <h1 className="text-sm text-cyan-500 mb-8 ml-1">Hi, my name is</h1>
  );
  const two = (
    <i>
      <h2 className="text-glitch text-6xl mb-2 font-sans">Henrique Pureza</h2>
    </i>
  );
  const three = (
    <h3 className="text-slate-400 text-4xl mt-1 text-slate leading-none font-sans">
      I&apos;m a software engineer based in Melbourne
    </h3>
  );
  const four = (
    <>
      <p className="mt-5 max-w-xl">
        I love building and problem solving with code. I have a keen interest in
        AI and its applications. Currently a full stack software engineer for
        Sidekicker.
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <div className="flex flex-col justify-center items-start min-h-screen h-screen p-0 ml-12">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};
