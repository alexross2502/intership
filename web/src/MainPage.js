import style from "./MainPage.module.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import ModalAuthorization from "./Components/ModalAuthorization/ModalAuthorization";
import ModalOrder from "./Components/ModalOrder/ModalOrder";

const MainPage = () => {
  return (
    <div>
      <div className={style.background}>
        <Header />
        <Content />
        <ModalAuthorization />
        <ModalOrder />
      </div>
    </div>
  );
};

export default MainPage;
