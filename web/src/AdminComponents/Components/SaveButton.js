import React from "react";
import style from "../AdminPage.module.css";
import { useTranslation } from "react-i18next";

export const SaveButton = () => {
  const { t } = useTranslation();

  return (
    <button type="submit" className={style.saveButton}>
      {t("adminPage.save")}
    </button>
  );
};
