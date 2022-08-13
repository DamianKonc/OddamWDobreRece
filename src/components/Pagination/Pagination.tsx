import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  ButtonHTMLAttributes,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import HelpingEl from "../Home/HelpingEl/HelpingEl";
import { RootState } from "../../app/store";
import { switchActive } from "../../app/activesSlicer";

import { Props, BTNInterface } from "./type";

const Pagination = ({ data, howManyOnPage }: Props) => {
  const isActive = useSelector(
    (state: RootState) => state.actives.activePaginationButton
  );
  const [btns, setbtns] = useState([1]);
  // const [currentPage, setCurrentPage] = useState(isActive);
  const pagesCount = Math.ceil(data.length / howManyOnPage);

  const dispatch = useDispatch();

  useEffect(() => {
    setbtns([]);
    for (let i = 1; i <= pagesCount; i++) {
      setbtns((prev) => [...prev, i]);
    }
  }, [data]);

  const endIndex = isActive * howManyOnPage;
  const startindex = endIndex - howManyOnPage;
  const currentPosts = data.slice(startindex, endIndex);

  const changePage = (e: BTNInterface) => {
    dispatch(
      switchActive({
        key: "activePaginationButton",
        value: parseInt(e.currentTarget.value) + 1,
      })
    );
  };

  return (
    <div className="pagination">
      {currentPosts.map((el, id) => (
        <HelpingEl
          key={id}
          name={el.name}
          mission={el.mission}
          need={el.need}
        />
      ))}
      <div className="pagination__btn-container">
        {btns.map((el, id) => (
          <button
            className={
              isActive == el
                ? "pagination__btn pagination__active"
                : "pagination__btn"
            }
            value={id}
            onClick={changePage}
            key={id}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
