import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderEntireTree() {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

renderEntireTree();

store.subscribe(renderEntireTree);
