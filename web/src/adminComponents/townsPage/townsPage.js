import { useTranslation } from "react-i18next";

const TownsPage = () => {
  const { t } = useTranslation();

  return <div>{t("townsPage.header")}</div>;
};

export default TownsPage;
