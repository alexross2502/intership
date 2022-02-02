import React from "react";
import style from "./AdminPage.module.css";
import { useTranslation } from "react-i18next";
import ListSelector from "./Components/ListSelector";

const AdminPage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <p className={style.leftSide__header}>{t("adminPage.header")}</p>
      </div>
      <div className={style.rightSide}></div>
    </div>
  );
};

export default AdminPage;
