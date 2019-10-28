import { stopSubmit } from 'redux-form';
import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };

    default:
      return state;
  }
};

// Action Creators
export const addPostAC = newPostText => ({ type: ADD_POST, newPostText });
export const deletePostAC = postId => ({ type: DELETE_POST, postId });
export const setProfile = profile => ({ type: SET_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });
export const savePhotoSuccess = photos => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

// Thunk Creators
export const getProfile = userId => {
  return async dispatch => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setProfile(response));
  };
};

export const getStatus = userId => {
  return async dispatch => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
  };
};

export const updateStatus = status => {
  return async dispatch => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = file => {
  return async dispatch => {
    const data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  };
};

export const saveProfile = profile => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
      dispatch(getProfile(userId));
    } else {
      // TODO: parse data.messages[0] = Invalid url format (Contacts->Facebook)
      // to: contacts and facebook
      // { _error: data.messages[0] } -> {contacts: {"facebook": data.messages[0]} }
      dispatch(stopSubmit('profile', { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  };
};

export default profileReducer;
