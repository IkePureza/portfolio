import React from "react";

export const ProjectCardGlitch = () => {
  return (
    <div className="p-6 glitch-card ">
      <div className="lines"></div>
      <div className="main-vhs bg-blue-900">
        <div className="noise"></div>
        <div className="vhs" data-splitting>
          VHS
        </div>
        <div className="time">
          <span id="time"></span>
        </div>
        <div className="counter">
          REC <label id="minutes">00</label>:<label id="seconds">00</label>
        </div>
      </div>
    </div>
  );
};
