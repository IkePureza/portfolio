import Image from "next/image";
import React from "react";
import brain from "../../../public/brainstorm.png";

export const IconSecondBrain = () => {
  return <Image className="invert" src={brain} alt="second brain"></Image>;
};
