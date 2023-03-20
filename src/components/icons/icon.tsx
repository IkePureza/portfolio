import React from "react";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";
import IconExternal from "./external";
import { IconSecondBrain } from "./secondBrain";

export interface IconProps {
  name?: string;
  size?: string;
}

const Icon = ({ name, size }: IconProps) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub size={size} />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Logo":
      return <IconLogo />;
    case "SecondBrain":
      return <IconSecondBrain />;
    default:
      return <IconExternal size={size} />;
  }
};

export default Icon;
