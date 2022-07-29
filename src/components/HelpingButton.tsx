import React from "react";

type TextButton = {
  text: string;
};

const changeFundation = (fund) => () => {
  // dispatch
};

const HelpingButton = (props: TextButton) => {
  return (
    <button onClick={changeFundation("fundacjom")} className="helpingButton">
      {props.text}
    </button>
  );
};

export default HelpingButton;
