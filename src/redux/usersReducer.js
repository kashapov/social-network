const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  usersCount: 0,
  currentPage: 1,
  isFetching: false
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setUsersCountAC = usersCount => ({
  type: SET_USERS_COUNT,
  usersCount
});
export const setCurrentPageAC = page => ({ type: SET_CURRENT_PAGE, page });
export const toggleIsFetchingAC = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, followed: true };
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, followed: false };
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.usersCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default usersReducer;
