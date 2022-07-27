import React from "react";

type TextButton = {
  text: string;
};

const HelpingButton = (props: TextButton) => {
  return <button className="helpingButton"> {props.text}</button>;
};

export default HelpingButton;
