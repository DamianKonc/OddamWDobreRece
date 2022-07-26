import React, { useState, useEffect } from "react";
import LinkElScroll from "../../LinkElScroll/LinkElScroll";
import LinkElRoute from "../../LinkElRoute/LinkElRoute";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedMail, setLoggedMail] = useState<string | null>("");
  const [navDisplay, setNavDisplay] = useState("");

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        setLoggedMail(user.email);
      } else {
        setIsLogged(false);
      }
    });
  }, [isLogged]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLogged(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showNav = () => {
    setNavDisplay((prev) => (prev === "" ? (prev = "flex") : (prev = "")));
  };

  return (
    <div className="navigation__container">
      <div className="navigation__burger">
        <input
          onChange={showNav}
          type="checkbox"
          name=""
          id=""
          className="check"
        ></input>
        <div className="ham-menu">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </div>
      <div style={{ display: navDisplay }} className="navigation">
        {isLogged ? (
          <ul className="navigation__list navigation__route">
            <li className="navigation__greeting">Cześć {loggedMail} </li>
            <LinkElRoute text="Oddaj rzeczy" link="/giveform" />
            <li className="linkElRoute">
              <Link className="linkElRoute__link" onClick={logout} to="/logout">
                Wyloguj
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navigation__list navigation__route">
            <LinkElRoute text="Zaloguj" link="/login" />
            <LinkElRoute text="Załóż konto" link="/createacc" />
          </ul>
        )}
        <ul className="navigation__list navigation__scroll">
          <LinkElScroll link="start" text="Start" />
          <LinkElScroll link="homeThreeColumns" text="O co chodzi?" />
          <LinkElScroll link="aboutUs" text="O nas" />
          <LinkElScroll
            link="fundationsAndOrganisations"
            text="Fundacja i organizacje"
          />
          <LinkElScroll link="Contact" text="Kontakt" />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
