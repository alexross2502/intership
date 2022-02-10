import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import MainPage from "./MainPage";
import { RequireAuth } from "./hoc/RequireAuth";
import ClientPage from "./AdminComponents/Components/ClientsPage/ClientPage";
import MastersPage from "./AdminComponents/Components/MastersPage/MastersPage";
import TownsPage from "./AdminComponents/Components/TownsPage/TownsPage";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/clients"
              element={
                <RequireAuth>
                  <ClientPage />
                </RequireAuth>
              }
            />
            <Route
              path="/masters"
              element={
                <RequireAuth>
                  <MastersPage />
                </RequireAuth>
              }
            />
            <Route
              path="/towns"
              element={
                <RequireAuth>
                  <TownsPage />
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
