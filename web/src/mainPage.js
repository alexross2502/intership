import style from "./MainPage.module.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import ModalAuthorization from "./Components/ModalAuthorization/ModalAuthorization";

const MainPage = () => {
  return (
    <div>
      <div className={style.background}>
        <Header />
        <Content />
        <ModalAuthorization />
      </div>
    </div>
  );
};

export default MainPage;
