import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likes: 10 },
    { id: 2, message: 'first post', likes: 0 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likes: 0,
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };

    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(p => p.id !== action.postId),
      };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

// Action Creators
export const addPostAC = newPostText => ({ type: ADD_POST, newPostText });
export const deletePostAC = postId => ({ type: DELETE_POST, postId });
export const setProfile = profile => ({ type: SET_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });

// Thunk Creators
export const getProfile = userId => {
  return dispatch => {
    usersAPI.getProfile(userId).then(response => {
      dispatch(setProfile(response));
    });
  };
};

export const getStatus = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
