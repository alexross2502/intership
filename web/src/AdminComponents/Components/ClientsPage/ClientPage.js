import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";
import { SaveButton } from "../SaveButton";
import React, { useEffect } from "react";
import { clientSave } from "./ClientSave";
import { LeftSideMenu } from "../../LeftSideMenu";
import { InputText } from "../../InputText";

const ClientPage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <LeftSideMenu />
      <div className={style.rightSide}>
        <p className={style.header}>{t("clientsPage.header")}</p>
        <div className={style.addContainer}>
          <p className={style.subtitle}>{t("adminPage.addClient")}</p>
          <InputText />
          <InputText />
          <span className={style.saveButton}>
            <SaveButton id="saveButton" />
          </span>
        </div>
        <div>
          <p className={style.subtitle}>{t("adminPage.list")}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
