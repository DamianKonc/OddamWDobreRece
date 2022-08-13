import React from "react";
import { Props } from "./type";

const HelpingEl = ({ name, mission, need }: Props) => {
  return (
    <li className="helpingEl">
      <div className="helpingEl__container">
        <div className="helpingEl__name">Fundacja "{name}"</div>
        <p className="helpingEl__mission">Cel i misja: {mission}</p>
      </div>
      <p className="helpingEl__need">{need}</p>
    </li>
  );
};

export default HelpingEl;
