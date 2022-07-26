import React from "react";
import LinkElScroll from "./LinkElScroll";
import LinkElRoute from "./LinkElRoute";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list navigation__route">
        <LinkElRoute text="Zaloguj" link="/" />
        <LinkElRoute text="Załóż konto" link="/" />
      </ul>
      <ul className="navigation__list navigation__scroll">
        <LinkElScroll text="Start" />
        <LinkElScroll text="O co chodzi?" />
        <LinkElScroll text="O nas" />
        <LinkElScroll text="Fundacja i organizacje" />
        <LinkElScroll text="Kontakt" />
      </ul>
    </div>
  );
};

export default Navigation;
