import React from "react";
import style from "./ModalAuthorization.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../redux/modalWindowReducer";
import { useTranslation } from "react-i18next";
import { onClickFunction } from "./onClickFunction";

const ModalAuthorization = () => {
  const isActive = useSelector((state) => state.modalWindow.isActive);
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
          <h1 className={style.modal_h1}>{t("admin_popup.description")}</h1>
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
              type={t("admin_popup.password")}
              name="pass"
              placeholder="Пароль"
              className={style.modal_input}
            ></input>
            <a href="#" onClick={onClickFunction} className={style.modal_a}>
              {t("admin_popup.button")}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAuthorization;
