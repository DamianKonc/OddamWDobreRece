import React from "react";

type HelpingProps = {
  name: string;
  mission: string;
  need: string;
};

const HelpingEl = (props: HelpingProps) => {
  return (
    <li className="helpingEl">
      <div className="helpingEl__container">
        <div className="helpingEl__name">Fundacja "{props.name}"</div>
        <p className="helpingEl__mission">Cel i misja: {props.mission}</p>
      </div>
      <p className="helpingEl__need">{props.need}</p>
    </li>
  );
};

export default HelpingEl;
