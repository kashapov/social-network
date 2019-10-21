import { createSelector } from 'reselect';

const getUsers = state => {
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(
  getUsers,
  users => {
    return users.filter(u => true);
  },
);

export const getPageSizeSelector = state => {
  return state.usersPage.pageSize;
};

export const getUsersCountSelector = state => {
  return state.usersPage.usersCount;
};

export const getCurrentPageSelector = state => {
  return state.usersPage.currentPage;
};

export const getIsFetchingSelector = state => {
  return state.usersPage.isFetching;
};

export const getIsFollowingProgressSelector = state => {
  return state.usersPage.isFollowingProgress;
};
