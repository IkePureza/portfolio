import React from "react";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";
import IconExternal from "./external";
import { IconSecondBrain } from "./secondBrain";

interface IconProps {
  name: string;
}

const Icon = (props: IconProps) => {
  switch (props.name) {
    case "GitHub":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Logo":
      return <IconLogo />;
    case "SecondBrain":
      return <IconSecondBrain />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
