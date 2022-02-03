import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";

const TownsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className={style.header}>{t("townsPage.header")}</p>
    </div>
  );
};

export default TownsPage;
