import React from "react";
import { Button } from "./Button";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="flex relative w-full">
        <p className="text-cyan-500 mb-4 mr-2">[3]</p>
        <h2 className="text-glitch text-3xl ">&lt;Contact&gt;</h2>
      </div>
      <div className="flex flex-col items-center justify-centers mr-3">
        <h2 className="text-3xl mb-4 font-semibold flex justify-center">
          Get in Touch!
        </h2>
        <p className="mb-4">
          My inbox is always open. Let&apos;s grab a coffee, I&apos;ll try my
          best to get back to you!
        </p>

        <Button href={`mailto:henriquepureza13@gmail.com`}>
          Hey!&#128075;
        </Button>
      </div>
    </section>
  );
};
