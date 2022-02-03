import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";

const MastersPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className={style.header}>{t("mastersPage.header")}</p>
    </div>
  );
};

export default MastersPage;
