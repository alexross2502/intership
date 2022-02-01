import React from "react";
import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const { t } = useTranslation();

  return <div>{t("adminPage.header")}</div>;
};

export default AdminPage;

//<div>{isAuthorized ? <Header /> : <Content />}</div>;
