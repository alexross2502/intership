import Button from "./Button/Button";
import style from "./Content.module.css";

const Content = () => {
  return (
    <div className={style.container}>
      <h1>
        <p>Со временем все будет хорошо,</p>
        <p>а вот с часами всякое может случиться</p>
      </h1>
      <div className={style.button}>
        <Button />
      </div>
    </div>
  );
};

export default Content;
