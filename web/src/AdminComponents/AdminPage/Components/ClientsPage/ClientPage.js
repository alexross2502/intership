import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";
import AddInput from "../AddInput";
import SaveButton from "../SaveButton";
import React, { useEffect } from "react";
import { clientSave } from "./ClientSave";

const ClientPage = () => {
  const { t } = useTranslation();
  /*
  useEffect(() => {
    let saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", (event) => {
      clientSave("sda", "dass");
      event.stopPropagation();
    });
  });
*/
  return (
    <div>
      <p className={style.header}>{t("clientsPage.header")}</p>
      <div className={style.addContainer}>
        <p className={style.subtitle}>{t("adminPage.addClient")}</p>
        <AddInput type="email" placeholder="email" id />
        <AddInput type="name" placeholder="Имя" />
        <span className={style.saveButton}>
          <SaveButton id="saveButton" />
        </span>
      </div>
      <div>
        <p className={style.subtitle}>{t("adminPage.list")}</p>
      </div>
    </div>
  );
};

export default ClientPage;
