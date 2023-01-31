import "./index.css";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  subscribe,
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderEntireTree(state) {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
}

renderEntireTree(state);

subscribe(renderEntireTree);
