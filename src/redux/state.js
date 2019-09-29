const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likes: 10 },
        { id: 2, message: "first post", likes: 0 }
      ],
      newPostText: ""
    },
    messagesPage: {
      messagesData: [
        { id: 1, message: "message 1" },
        { id: 2, message: "message 2" },
        { id: 3, message: "message 3" }
      ],
      dialogsData: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "John" },
        { id: 3, name: "Elon" }
      ]
    },
    sidebar: {}
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likes: 0
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newPostText;
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text
});

window.store = store;

export default store;
