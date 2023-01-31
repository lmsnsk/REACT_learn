import React from "react";
import "./App.css";
import ProfilePage from "./components/Profile/ProfilePage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Sett from "./components/Sett/Sett";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar state={props.state} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/Dialogs"
            element={
              <Dialogs
                state={props.state}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
              />
            }
          />
          <Route
            path="/ProfilePage"
            element={
              <ProfilePage
                state={props.state}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Sett" element={<Sett />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
