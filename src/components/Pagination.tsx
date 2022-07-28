import React, { useMemo, useState, useRef, useEffect } from "react";
import HelpingEl from "./HelpingEl";

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
  const [btns, setbtns] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(props.data.length / props.howManyOnPage);

  useEffect(() => {
    setbtns([]);
    for (let i = 1; i <= pagesCount; i++) {
      setbtns((prev) => [...prev, i]);
    }
  }, [props.data]);

  const endIndex = currentPage * props.howManyOnPage;
  const startindex = endIndex - props.howManyOnPage;
  const currentPosts = props.data.slice(startindex, endIndex);

  const changePage = (e) => {
    setCurrentPage(parseInt(e.target.value) + 1);
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
            className="pagination__btn"
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
