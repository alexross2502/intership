import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import ClientPage from "./adminComponents/clientsPage/clientPage";
import MainPage from "./mainPage";
import MastersPage from "./adminComponents/mastersPage/mastersPage";
import TownsPage from "./adminComponents/townsPage/townsPage";
import AdminPage from "./adminComponents/adminPage/adminPage";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/clients" element={<ClientPage />} />
            <Route path="/masters" element={<MastersPage />} />
            <Route path="/towns" element={<TownsPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
