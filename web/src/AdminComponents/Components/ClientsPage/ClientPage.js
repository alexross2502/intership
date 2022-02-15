import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";
import { SaveButton } from "../SaveButton";
import React from "react";
import { clientSave } from "./ClientSave";
import { LeftSideMenu } from "../../LeftSideMenu";
import { useForm } from "react-hook-form";

const ClientPage = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  async function newClient(data) {
    console.log(data);
  }

  return (
    <div className={style.container} onSubmit={handleSubmit(newClient)}>
      <LeftSideMenu />
      <div className={style.rightSide}>
        <p className={style.header}>{t("clientsPage.header")}</p>
        <form className={style.addContainer}>
          <p className={style.subtitle}>{t("adminPage.addClient")}</p>
          <div className={style.inputContainer}>
            <input
              className={style.inputText}
              type="text"
              placeholder="Имя"
              {...register("firtsName")}
            ></input>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.inputText}
              type="text"
              placeholder="Фамилия"
              {...register("secondName")}
            ></input>
          </div>

          <SaveButton id="saveButton" />
        </form>
        <div>
          <p className={style.subtitle}>{t("adminPage.list")}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
