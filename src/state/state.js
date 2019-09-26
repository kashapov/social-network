const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi, how are you?", likes: 10 },
      { id: 2, message: "first post", likes: 0 }
    ]
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
  }
};

export default state;
