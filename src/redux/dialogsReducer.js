const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

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
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ""
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessageText };

    default:
      return state;
  }
};

export const addMessageAC = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextAC = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text
});

export default dialogsReducer;
