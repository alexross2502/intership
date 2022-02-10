import style from "./AdminPage.module.css";

export const InputText = () => {
  return (
    <div className={style.inputContainer}>
      <input className={style.inputText} type="text"></input>
    </div>
  );
};
