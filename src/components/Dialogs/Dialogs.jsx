import stl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function Dialogs(props) {
  return (
    // <BrowserRouter>
    <div className={stl.dialogs}>
      <div className={stl.dialogsItems}>
        <DialogItem id="1" name="Петрович" />
        <DialogItem id="2" name="Эммануэль" />
        <DialogItem id="3" name="Жмых" />
        <DialogItem id="4" name="Франсуа" />
        <DialogItem id="5" name="Колено" />
      </div>
      <div className={stl.messages}>
        {/* <Routes>
            <Route
              path="/Message"
              elemet={<Message text="Привет, чувак! Чокаво?" />}
            /> */}

        <Message text="Привет, чувак! Чокаво?" />
        <Message text="Сколько пиво вчера выпил? Признавайся, алкаш" />
        <Message text="Я завтра не выйду на работу, Семен Петрович" />
        <Message text="Пипец голова после вчерашнего болит:(" />
        <Message text="Я обожрался)))))))))" />
        {/* </Routes> */}
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default Dialogs;
