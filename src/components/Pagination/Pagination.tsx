import React, { useMemo, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HelpingEl from "../Home/HelpingEl/HelpingEl";
import { RootState } from "../../app/store";
import { switchActive } from "../../app/activesSlicer";

type PaginationData = {
  name: string;
  mission: string;
  need: string;
};

type PaginationProps = {
  data: PaginationData[];
  howManyOnPage: number;
};

const Pagination = (props: PaginationProps) => {
  const isActive = useSelector(
    (state: RootState) => state.actives.activePaginationButton
  );
  const [btns, setbtns] = useState([1]);
  // const [currentPage, setCurrentPage] = useState(isActive);
  const pagesCount = Math.ceil(props.data.length / props.howManyOnPage);

  const dispatch = useDispatch();

  useEffect(() => {
    setbtns([]);
    for (let i = 1; i <= pagesCount; i++) {
      setbtns((prev) => [...prev, i]);
    }
  }, [props.data]);

  const endIndex = isActive * props.howManyOnPage;
  const startindex = endIndex - props.howManyOnPage;
  const currentPosts = props.data.slice(startindex, endIndex);

  const changePage = (e) => {
    dispatch(
      switchActive({
        key: "activePaginationButton",
        value: parseInt(e.target.value) + 1,
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
