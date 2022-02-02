import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import MainPage from "./MainPage";
import AdminPage from "./AdminComponents/AdminPage/AdminPage";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/admin">
              <RequireAuth>
                <AdminPage />
              </RequireAuth>
            </Route>
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
