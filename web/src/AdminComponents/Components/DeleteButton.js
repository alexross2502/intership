import React from "react";
import style from "../AdminPage.module.css";
import { useTranslation } from "react-i18next";
import Api from "./api";

export const DeleteButton = (props) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={style[props.buttonType]}
      onClick={() => {
        Api.delete(props.url, props.id);
      }}
    >
      {t(`adminPage.${props.buttonType}`)}
    </button>
  );
};
