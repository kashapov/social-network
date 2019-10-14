import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likes: 10 },
    { id: 2, message: "first post", likes: 0 }
  ],
  newPostText: "",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newPostText };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

// Action Creators
export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text
});
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
