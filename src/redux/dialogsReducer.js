const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.newMessageText
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      };

    default:
      return state;
  }
};

export const addMessageAC = newMessageText => ({
  type: ADD_MESSAGE,
  newMessageText
});

export default dialogsReducer;
