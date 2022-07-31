import React from "react";

interface ButtonProps {
  text: string;
  changeOrganizations: (params: any) => any;
}

const HelpingButton = ({ text, changeOrganizations }: ButtonProps) => {
  return (
    <button
      value={text}
      onClick={changeOrganizations}
      className="helpingButton"
    >
      {text}
    </button>
  );
};

export default HelpingButton;
