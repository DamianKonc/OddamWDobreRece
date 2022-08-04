import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const FetchingData = ({ name }) => {
  //   const data = useSelector((state: RootState) => state.yourCharity.stuff);
  const neverSurrender = useSelector(
    (state: RootState) => state.yourCharity[name]
  );

  return <>{neverSurrender}</>;
};
