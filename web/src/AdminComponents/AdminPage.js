import React, { useState } from "react";
import style from "./AdminPage.module.css";
import { useTranslation } from "react-i18next";
import ListSelectorButton from "./Components/ListSelectorButton";

const AdminPage = () => {
  const { t } = useTranslation();
  let [page, setPage] = useState("clients");

  function switchFunction(page) {
    setPage(page);
  }

  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <p className={style.header}>{t("adminPage.header")}</p>
        <div
          className={style.switchButton}
          onClick={() => switchFunction("clients")}
        >
          <ListSelectorButton name="clients" />
        </div>
        <div
          className={style.switchButton}
          onClick={() => switchFunction("masters")}
        >
          <ListSelectorButton name="masters" />
        </div>
        <div
          className={style.switchButton}
          onClick={() => switchFunction("towns")}
        >
          <ListSelectorButton name="towns" />
        </div>
      </div>
      <div className={style.rightSide}>
        <p>sdads</p>
      </div>
    </div>
  );
};

export default AdminPage;
