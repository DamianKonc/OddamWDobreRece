import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaceConfig";
import { fetchData } from "./datasSlicer";
import { useSelector, useDispatch } from "react-redux";
import { async } from "@firebase/util";

const DownloadingDatas = () => {
  const dispatch = useDispatch();

  const nonGovernmentalOrganizations = " nonGovernmentalOrganizations";
  const localCollection = " localCollection";
  const fundations = "Fundations";

  const downloading = async () => {
    const querySnapshot = await getDocs(collection(db, fundations));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      console.log(doc.data());
      //   dispatch(fetchData(doc.data()));
    });
  };
};

export default DownloadingDatas;
