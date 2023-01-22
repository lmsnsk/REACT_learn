import "./App.css";
import ProfilePage from "./components/Profile/ProfilePage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <ProfilePage />
    </div>
  );
}

export default App;
