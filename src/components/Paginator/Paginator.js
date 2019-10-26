import React, { useState } from 'react';

import {
  paginatorPortionSize,
  paginatorNextBtn,
  paginatorPrevBtn,
  paginatorTitle,
} from '../../constants';
import classes from './Paginator.module.css';

const Paginator = props => {
  const {
    pageSize,
    itemsCount,
    currentPage,
    onPageChanged,
    portionSize = paginatorPortionSize,
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  let pagesList = pages
    .filter(
      page => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
    )
    .map(page => {
      return (
        <li
          key={page}
          className={
            currentPage === page
              ? classes.paginationItemSelected
              : classes.paginationItem
          }
          onClick={e => onPageChanged(page)}
        >
          {page}
        </li>
      );
    });

  return (
    <div className={classes.pagination}>
      <span className={classes.paginationTitle}>{paginatorTitle}:</span>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          {paginatorPrevBtn}
        </button>
      )}
      <ul className={classes.paginationList}>{pagesList}</ul>
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          {paginatorNextBtn}
        </button>
      )}
    </div>
  );
};

export default Paginator;
