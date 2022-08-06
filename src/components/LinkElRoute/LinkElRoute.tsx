import React from "react";
import { Link } from "react-router-dom";

type LinkProps = { text: string; link: string };

const LinkElRoute = (props: LinkProps) => {
  return (
    <li className="linkElRoute">
      <Link className="linkElRoute__link" to={props.link}>
        {props.text}
      </Link>
    </li>
  );
};

export default LinkElRoute;
