import React from "react";
import { Link } from "react-router-dom";
import { Props } from "./type";

const LinkElRoute = ({ text, link }: Props) => {
  return (
    <li className="linkElRoute">
      <Link className="linkElRoute__link" to={link}>
        {text}
      </Link>
    </li>
  );
};

export default LinkElRoute;
