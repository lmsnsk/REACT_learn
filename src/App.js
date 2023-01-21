import "./App.css";
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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
