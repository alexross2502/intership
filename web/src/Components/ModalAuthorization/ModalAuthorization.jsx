import React from "react";
import style from "./ModalAuthorization.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setModalActive } from "../../redux/modalWindowReducer";
import { setAuthorized } from "../../redux/authorizationReducer";
import { useTranslation } from "react-i18next";
import { onClickFunction } from "./onClickFunction";
import { useHistory } from "react-router-dom";

const ModalAuthorization = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  //Открытие\закрытие модального окна
  const isActive = useSelector((state) => state.modalWindow.isActive);
  function onActiveClick() {
    dispatch(setModalActive());
  }
  //Вход в админку
  function successfulLogin() {
    dispatch(setAuthorized());
    history.push("/admin");
  }

  function failedLogin() {
    let login = document.getElementsByName("email")[0];
    let pass = document.getElementsByName("pass")[0];
    login.value = "";
    pass.value = "";
    login.placeholder = "Введите правильный логин";
    pass.placeholder = "Введите правильный пароль";
  }

  return (
    <div
      className={isActive ? `${style.modal} ${style.active}` : `${style.modal}`}
      onClick={() => onActiveClick()}
    >
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal_container}>
          <h1 className={style.modal_h1}>{t("adminPopup.description")}</h1>
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
              type={t("adminPopup.password")}
              name="pass"
              placeholder="Пароль"
              className={style.modal_input}
            ></input>
            <a
              href="#"
              onClick={async () => {
                if (await onClickFunction()) {
                  successfulLogin();
                } else {
                  failedLogin();
                }
              }}
              className={style.modal_a}
            >
              {t("adminPopup.button")}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAuthorization;
