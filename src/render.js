import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderEntireTree(state) {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>
  );
}

export default renderEntireTree;
