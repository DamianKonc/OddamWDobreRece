import React from "react";
import { NavLink } from "react-router-dom";

type LinkProps = {
  text: string;
  link: string;
};

const LinkElScroll = (props: LinkProps) => {
  return (
    <li className="linkElScroll">
      <NavLink to={`/#${props.link}`} className="linkElScroll__link">
        {props.text}
      </NavLink>
    </li>
  );
};

export default LinkElScroll;
