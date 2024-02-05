import React from "react";
import { GiGrandPiano } from "react-icons/gi";
import { GiViolin } from "react-icons/gi";

export default function SkillsHeading({ children, className }) {
  return (
    <div className={className}>
      <h2 className=" text-xl font-bold">{children}</h2>
      <span className="text-3xl  ">
        {children === "Piano" ? (
          <GiGrandPiano />
        ) : (
          <GiViolin className=" text-orange-700" />
        )}
      </span>
    </div>
  );
}
