import React from 'react';

import classes from './Paginator.module.css';

const Paginator = props => {
  const { pageSize, usersCount, currentPage, onPageChanged } = props;

  const pagesCount = Math.ceil(usersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesList = pages.map(page => {
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
      <span className={classes.paginationTitle}>pages: </span>
      <ul className={classes.paginationList}>{pagesList}</ul>
    </div>
  );
};

export default Paginator;
