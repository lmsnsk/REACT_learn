import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let dialogsEl = props.state.messagesPage.dialogsData.map((name) => (
    <DialogItem id={name.id} name={name.name} />
  ));

  let messagesEl = props.state.messagesPage.messagesData.map((mess) => (
    <Message id={mess.id} text={mess.messageText} />
  ));

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItems}>{dialogsEl}</div>
      <div className={stl.messages}>{messagesEl}</div>
    </div>
  );
}

export default Dialogs;
