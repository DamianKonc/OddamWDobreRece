import React from "react";

type SimpleStepsItemProps = {
  imageSrc: string;
  imageAlt: string;
  header: string;
  paragraph: string;
};

const SimpleStepsItem = (props: SimpleStepsItemProps) => {
  return (
    <div className="simpleStepsItem">
      <img
        className="simpleStepsItem__img"
        src={props.imageSrc}
        alt={props.imageAlt}
      />
      <div
        className="simpleStepsItem__img-div"
        style={{ background: `${props.imageSrc}` }}
      ></div>

      <h4 className="simpleStepsItem__header">{props.header}</h4>
      <div className="simpleStepsItem__line" />
      <p className="simpleStepsItem__text">{props.paragraph}</p>
    </div>
  );
};

export default SimpleStepsItem;
