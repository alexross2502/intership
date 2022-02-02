import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import ClientPage from "./AdminComponents/ClientsPage/ClientPage";
import MainPage from "./MainPage";
import MastersPage from "./AdminComponents/MastersPage/MastersPage";
import TownsPage from "./AdminComponents/TownsPage/TownsPage";
import AdminPage from "./AdminComponents/AdminPage/AdminPage";
import { RequireAuth } from "./hoc/RequireAuth";

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
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <AdminPage />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
