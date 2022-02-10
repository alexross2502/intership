import { useTranslation } from "react-i18next";
import style from "../../AdminPage.module.css";
import { LeftSideMenu } from "../../LeftSideMenu";

const MastersPage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <LeftSideMenu />
      <div className={style.rightSide}>
        <p className={style.header}>{t("mastersPage.header")}</p>
      </div>
    </div>
  );
};

export default MastersPage;
