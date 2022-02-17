import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";
import { FormButton } from "../FormButton";
import React, { useEffect, useState } from "react";
import { clientSave } from "./ClientSave";
import { LeftSideMenu } from "../../LeftSideMenu";
import { useForm } from "react-hook-form";
import { GetAll } from "../GetAll";
import { ClientForm } from "./ClientForm";

const ClientPage = () => {
  const { t } = useTranslation();
  const [clientsList, setClientsList] = useState([]);
  //Это временная заглушка, я ее уберу
  const [rerender, setRerender] = useState(0);
  setTimeout(() => {
    setRerender(rerender + 1);
  }, 500);
  //******** */
  useEffect(async () => {
    let clients = [...(await GetAll("clients"))];
    setClientsList(clients);
  }, [rerender]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  async function newClient(data) {
    clientSave(data.firstName, data.email);
  }

  const clientListItem = clientsList.map((item) => {
    return <ClientForm data={item} key={item.id} />;
  });

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
              {...register("firstName")}
            ></input>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.inputText}
              type="text"
              placeholder="Email"
              {...register("email")}
            ></input>
          </div>
          <FormButton buttonType="saveButton" />
        </form>
        <div>
          <p className={style.subtitle}>{t("adminPage.list")}</p>
          <div className={style.listContainer}></div>
          {clientListItem}
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
