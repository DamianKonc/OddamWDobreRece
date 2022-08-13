import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Props } from "./type";

const HelpingButton = ({ text, changeOrganizations }: Props) => {
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
