import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import HelpingButton from "./HelpingButton";
import Pagination from "./Pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebaceConfig";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../app/datasSlicer";
import { RootState } from "../app/store";

const Helping = () => {
  interface Items {
    name: string;
    need: string;
    mission: string;
    ID: number;
  }

  const [databaseIntems, setDatabaseItems] = useState<Items[]>([] as Items[]);
  const itemsss = useSelector((state: RootState) => state.datas);
  const dispatch = useDispatch();

  const nonGovernmentalOrganizations = " nonGovernmentalOrganizations";
  const localCollection = " localCollection";
  const fundations = "Fundations";

  const downloading = async () => {
    // setDatabaseItems([]);
    const querySnapshot = await getDocs(collection(db, localCollection));
    const result: Items[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      const items: Items = doc.data() as Items;

      result.push(items);
      // setDatabaseItems((prev) => [...prev, doc.data() as Items]);
    });
    dispatch(fetchData(result));
  };

  console.log(itemsss.dataFromDB);

  useEffect(() => {
    downloading();
  }, []);

  // console.log(databaseIntems)ss;

  return (
    <section id="fundationsAndOrganisations" className="helping">
      <HeaderTitle text="Komu pomagamy?" />
      <div className="helping__btns">
        <HelpingButton text={"Fundacjom"} />
        <HelpingButton text={"Organizajom pozarządowym"} />
        <HelpingButton text={"Lokalnym zbiórkom"} />
      </div>
      <p className="helpin__text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <ul>
        <Pagination data={itemsss.dataFromDB} howManyOnPage={3} />
      </ul>
    </section>
  );
};

export default Helping;
