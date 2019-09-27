import { renderEntireTree } from "../render";

const state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export let updateNewPostText = newPostText => {
  state.profilePage.newPostText = newPostText;

  renderEntireTree(state);
};

export default state;
