import React, { ReactNode } from "react";

interface SideProps {
  children: ReactNode;
  orientation: "right" | "left";
}

export const Side = (props: SideProps) => {
  return (
    <div
      className={`w-10 fixed bottom-0 z-10 text-slate-300 ${
        props.orientation === "left"
          ? "left-10 right-auto"
          : "left-auto right-10"
      } `}
    >
      {props.children}
    </div>
  );
};
