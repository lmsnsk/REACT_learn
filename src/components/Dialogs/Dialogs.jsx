import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: "Петрович" },
    { id: 2, name: "Эммануэль" },
    { id: 3, name: "Жмых" },
    { id: 4, name: "Франсуа" },
    { id: 5, name: "Колено" },
  ];

  let messageData = [
    { id: 1, messageText: "Привет, чувак! Чокаво?" },
    { id: 2, messageText: "Сколько пиво вчера выпил? Признавайся, алкаш" },
    { id: 3, messageText: "Я завтра не выйду на работу, Семен Петрович" },
    { id: 4, messageText: "Пипец голова после вчерашнего болит:(" },
    { id: 5, messageText: "Я обожрался)))))))))" },
  ];

  let dialogsEl = dialogsData.map((name) => (
    <DialogItem id={name.id} name={name.name} />
  ));

  let messagesEl = messageData.map((mess) => (
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
