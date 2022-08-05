import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import HelpingButton from "./HelpingButton";
import Pagination from "./Pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebaceConfig";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../app/datasSlicer";
import { RootState } from "../app/store";
import { switchActive } from "../app/activesSlicer";

const Helping = () => {
  interface Items {
    name: string;
    need: string;
    mission: string;
    ID: number;
  }

  const itemsss = useSelector((state: RootState) => state.datas);
  const dispatch = useDispatch();

  const [helpingTo, setHelpingTo] = useState("Fundations");
  const [messageText, setMessageText] = useState(
    " W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
  );

  const changeActiveButtonToOne = () => {
    dispatch(switchActive({ key: "activePaginationButton", value: 1 }));
  };

  const changeAtiveOrganization = (name: string) => {
    dispatch(switchActive({ key: "activeOrganization", value: name }));
  };

  const downloading = async () => {
    const querySnapshot = await getDocs(collection(db, helpingTo));
    const result: Items[] = [];
    querySnapshot.forEach((doc) => {
      const items: Items = doc.data() as Items;

      result.push(items);
    });
    dispatch(fetchData(result));
  };

  const pickMessage = () => {
    switch (helpingTo) {
      case "Fundations":
        setMessageText(
          "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
        );
        changeActiveButtonToOne();
        break;
      case " nonGovernmentalOrganizations":
        setMessageText(
          "Zweryfikowane, najlepsze Organizacje pozarządowe sprawdzone przez nas. Nigdy nikt nie był w tak pewny w proponowaniu organizacji jak my."
        );
        changeActiveButtonToOne();
        break;
      case " localCollection":
        setMessageText(
          "Znajdź najlepszą zbiórkę dla siebie. Możesz śmiało kontaktować się z organizatorami, są w Twojej okolicy. Możemy ich polecić z głębi serca, a serca mamy wielkie!!"
        );
        changeActiveButtonToOne();
        break;
    }
  };

  useEffect(() => {
    downloading();
    pickMessage();
  }, [helpingTo]);

  const changeOrganizationsss = (e) => {
    switch (e.currentTarget.value) {
      case "Fundacjom":
        setHelpingTo("Fundations");
        changeAtiveOrganization("Fundacjom");
        break;
      case "Organizajom pozarządowym":
        setHelpingTo(" nonGovernmentalOrganizations");
        changeAtiveOrganization("Organizajom pozarządowym");
        break;
      case "Lokalnym zbiórkom":
        setHelpingTo(" localCollection");
        changeAtiveOrganization("Lokalnym zbiórkom");
        break;
    }
  };

  return (
    <section id="fundationsAndOrganisations" className="helping">
      <HeaderTitle text="Komu pomagamy?" />

      <div className="helping__btns">
        <HelpingButton
          changeOrganizations={changeOrganizationsss}
          text={"Fundacjom"}
        />

        <HelpingButton
          changeOrganizations={changeOrganizationsss}
          text={"Organizajom pozarządowym"}
        />
        <HelpingButton
          changeOrganizations={changeOrganizationsss}
          text={"Lokalnym zbiórkom"}
        />
      </div>
      <p className="helpin__text">{messageText}</p>
      <ul>
        <Pagination data={itemsss.dataFromDB} howManyOnPage={3} />
      </ul>
    </section>
  );
};

export default Helping;
