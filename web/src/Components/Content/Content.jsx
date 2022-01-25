import Button from "./Button/Button";
import style from "./Content.module.css";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <h1>
        <p>{t("mainText.part1")}</p>
        <p>{t("mainText.part2")}</p>
      </h1>
      <div className={style.button}>
        <Button />
      </div>
    </div>
  );
};

export default Content;
