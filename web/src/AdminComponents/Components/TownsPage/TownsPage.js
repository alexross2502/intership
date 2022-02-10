import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";
import { LeftSideMenu } from "../../LeftSideMenu";

const TownsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <LeftSideMenu />
      <div className={style.rightSide}>
        <p className={style.header}>{t("townsPage.header")}</p>
      </div>
    </div>
  );
};

export default TownsPage;
