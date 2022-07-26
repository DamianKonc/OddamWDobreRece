import React from "react";
import { Link } from "react-scroll";

type LinkProps = {
  text: string;
};

const LinkElScroll = (props: LinkProps) => {
  return (
    <li className="linkElScroll">
      <Link className="linkElScroll__link" to={props.text}>
        {props.text}
      </Link>
    </li>
  );
};

export default LinkElScroll;
