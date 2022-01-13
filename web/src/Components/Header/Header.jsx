import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { setActive } from "../../redux/modalWindowReducer";

const Header = () => {
  const dispatch = useDispatch();
  function onActiveClick() {
    dispatch(setActive());
  }

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <h1>Clockwise Clockware</h1>
      </div>
      <div className={style.container}>
        <ul>
          <li>
            <a href="#" className={style.link}>
              Портфолио
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              Контакты
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              О нас
            </a>
          </li>
          <li>
            <a href="#" className={style.link} onClick={() => onActiveClick()}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
