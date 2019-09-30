import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likes: 10 },
        { id: 2, message: "first post", likes: 0 }
      ],
      newPostText: ""
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: "message 1" },
        { id: 2, message: "message 2" },
        { id: 3, message: "message 3" }
      ],
      dialogsData: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "John" },
        { id: 3, name: "Elon" }
      ],
      newMessageText: ""
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};

window.store = store;

export default store;
