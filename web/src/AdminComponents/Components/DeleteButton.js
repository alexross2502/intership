import React from "react";
import style from "../AdminPage.module.css";
import { useTranslation } from "react-i18next";
import { DeleteController } from "./DeleteController";

export const DeleteButton = (props) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={style[props.buttonType]}
      onClick={() => {
        DeleteController(props.url, props.id);
      }}
    >
      {t(`adminPage.${props.buttonType}`)}
    </button>
  );
};
