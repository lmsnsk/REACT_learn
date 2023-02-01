const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_TEXT = "NEW-MESSAGE-TEXT";

function dialogsReducer(state, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        messageText: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
}

export default dialogsReducer;
