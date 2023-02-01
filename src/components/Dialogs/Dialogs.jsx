import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  addMessageActionCreator,
  newMessageTextActionCreator,
} from "../../redux/state";

function Dialogs(props) {
  let dialogsEl = props.store
    .getState()
    .messagesPage.dialogsData.map((name) => (
      <DialogItem id={name.id} name={name.name} url={name.url} />
    ));

  let messagesEl = props.store
    .getState()
    .messagesPage.messagesData.map((mess) => (
      <Message id={mess.id} text={mess.messageText} />
    ));

  let newMessageElement = React.createRef();

  function addMessageClick() {
    props.store.dispatch(addMessageActionCreator());
  }

  function onMessageChange() {
    let message = newMessageElement.current.value;
    props.store.dispatch(newMessageTextActionCreator(message));
  }

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItems}>{dialogsEl}</div>
      <div className={stl.messages}>
        {messagesEl}
        <div>
          <textarea
            ref={newMessageElement}
            className={stl.enterMessage}
            onChange={onMessageChange}
            cols="80"
            rows="4"
            value={props.store.getState().messagesPage.newMessageText}
            name="entermessage"
          />
        </div>
        <button className={stl.btn} onClick={addMessageClick}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Dialogs;
