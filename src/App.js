import "./App.css";
import ProfilePage from "./components/Profile/ProfilePage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Sett from "./components/Sett/Sett";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Dialogs" element={<Dialogs />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Sett" element={<Sett />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
