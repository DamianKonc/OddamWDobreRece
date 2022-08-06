import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

interface ButtonProps {
  text: string;
  changeOrganizations: (params: any) => any;
}

const HelpingButton = ({ text, changeOrganizations }: ButtonProps) => {
  const activeOrganization = useSelector(
    (state: RootState) => state.actives.activeOrganization
  );

  return (
    <button
      value={text}
      onClick={changeOrganizations}
      className={
        text == activeOrganization
          ? "helpingButton  helpingButton__active"
          : "helpingButton"
      }
    >
      {text}
    </button>
  );
};

export default HelpingButton;
