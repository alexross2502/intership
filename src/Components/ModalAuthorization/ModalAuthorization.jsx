import React from "react";
import style from "./ModalAuthorization.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../reducers/modalWindowReducer";

const ModalAuthorization = () => {
  const isActive = useSelector((state) => state.modalWindow.isActive);
  const dispatch = useDispatch();
  function onActiveClick() {
    dispatch(setActive());
  }

  return (
    <div
      className={isActive ? `${style.modal} ${style.active}` : `${style.modal}`}
      onClick={() => onActiveClick()}
    >
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal_container}>
          <h1 className={style.modal_h1}>Вход</h1>
          <span className={style.closeBtn}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"
              className={style.modal_img}
              onClick={() => onActiveClick()}
            ></img>
          </span>

          <form className={style.modal_form}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className={style.modal_input}
            ></input>
            <input
              type="password"
              name="pass"
              placeholder="Пароль"
              className={style.modal_input}
            ></input>
            <a href="#" className={style.modal_a}>
              Войти
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAuthorization;


