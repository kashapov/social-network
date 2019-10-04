const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likes: 10 },
    { id: 2, message: "first post", likes: 0 }
  ],
  newPostText: "",
  profile: null
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

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text
});
export const setProfile = profile => ({ type: SET_PROFILE, profile });

export default profileReducer;
