import React, { useState, useEffect } from "react";
import LinkElScroll from "./LinkElScroll";
import LinkElRoute from "./LinkElRoute";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedMail, setLoggedMail] = useState<string | null>("");

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        setIsLogged(true);
        setLoggedMail(user.email);
      } else {
        setIsLogged(false);
        console.log("dupa");
      }
    });
  }, [isLogged]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLogged(false);
        console.log("signetOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navigation">
      {isLogged ? (
        <ul className="navigation__list navigation__route">
          <li className="navigation__greeting">Cześć {loggedMail} </li>
          <LinkElRoute text="Oddaj rzeczy" link="/" />
          <li className="linkElRoute">
            <Link className="linkElRoute__link" onClick={logout} to="/">
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
  );
};

export default Navigation;
