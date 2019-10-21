import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  usersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, followed: true };
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, followed: false };
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.usersCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter(id => id !== action.userId),
      };
    default:
      return state;
  }
};

// Action Creators
export const setFollow = userId => ({ type: FOLLOW, userId });
export const setUnfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setUsersCount = usersCount => ({
  type: SET_USERS_COUNT,
  usersCount,
});
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

// Thunk Creators
export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    });
  };
};

export const followUser = userId => {
  return dispatch => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setFollow(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export const unfollowUser = userId => {
  return dispatch => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUnfollow(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
