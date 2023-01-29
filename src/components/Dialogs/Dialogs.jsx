import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {
  let dialogsEl = props.state.messagesPage.dialogsData.map((name) => (
    <DialogItem id={name.id} name={name.name} url={name.url} />
  ));

  let messagesEl = props.state.messagesPage.messagesData.map((mess) => (
    <Message id={mess.id} text={mess.messageText} />
  ));

  let newMessageElement = React.createRef();

  function addMessageClick() {
    props.addMessage();
  }

  function onMessageChange() {
    let message = newMessageElement.current.value;
    props.updateNewMessageText(message);
  }

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItems}>{dialogsEl}</div>
      <div className={stl.messages}>
        {messagesEl}
        <textarea
          onChange={onMessageChange}
          name="enterMessage"
          className={stl.enterMessage}
          ref={newMessageElement}
          cols="80"
          rows="4"
          placeholder="Введите сообщение..."
        />
        <button className={stl.btn} onClick={addMessageClick}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Dialogs;
