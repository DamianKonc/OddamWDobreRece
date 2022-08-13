import React, { useState, useEffect } from "react";

import { Props } from "./type";

const SimpleStepsItem = ({ imageSrc, imageAlt, header, paragraph }: Props) => {
  return (
    <div className="simpleStepsItem">
      <img className="simpleStepsItem__img" src={imageSrc} alt={imageAlt} />
      <h4 className="simpleStepsItem__header">{header}</h4>
      <div className="simpleStepsItem__line" />
      <p className="simpleStepsItem__text">{paragraph}</p>
    </div>
  );
};

export default SimpleStepsItem;
