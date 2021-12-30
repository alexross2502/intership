import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import ModalAuthorization from "./Components/ModalAuthorization/ModalAuthorization";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <ModalAuthorization />
    </div>
  );
}

export default App;
