import { useTranslation } from "react-i18next";

const MastersPage = () => {
  const { t } = useTranslation();

  return <div>{t("mastersPage.header")}</div>;
};

export default MastersPage;
