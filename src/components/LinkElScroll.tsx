import React from "react";
import { Link } from "react-scroll";

type LinkProps = {
  text: string;
  link: string;
};

const LinkElScroll = (props: LinkProps) => {
  return (
    <li className="linkElScroll">
      <Link
        activeClass="active"
        to={`${props.link}`}
        spy={true}
        smooth={true}
        className="linkElScroll__link"
      >
        {props.text}
      </Link>
    </li>
  );
};

export default LinkElScroll;
