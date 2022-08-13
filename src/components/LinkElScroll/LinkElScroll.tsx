import React from "react";
import { NavLink } from "react-router-dom";
import { Props } from "./type";

const LinkElScroll = ({ text, link }: Props) => {
  return (
    <li className="linkElScroll">
      <NavLink to={`/#${link}`} className="linkElScroll__link">
        {text}
      </NavLink>
    </li>
  );
};

export default LinkElScroll;
