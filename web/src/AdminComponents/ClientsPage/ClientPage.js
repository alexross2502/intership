import { useTranslation } from "react-i18next";

const ClientPage = () => {
  const { t } = useTranslation();

  return <div>{t("clientsPage.header")}</div>;
};

export default ClientPage;
