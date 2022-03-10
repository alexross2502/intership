import React, { useEffect, useState } from "react";
import style from "./ModalOrder.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setModalOrder } from "../../redux/orderReducer";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Api from "../../AdminComponents/Components/api";

const ModalOrder = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  //Открытие\закрытие модального окна
  const isActive = useSelector((state) => state.order.isActive);

  function onActiveClick() {
    dispatch(setModalOrder());
  }

  const [townsList, setTownsList] = useState([]);
  useEffect(async () => {
    let towns = [...(await Api.getAll("towns"))];
    setTownsList(towns);
  });
  const townListItem = townsList.map((item) => {
    return (
      <option value={item.name} key={item.id}>
        {item.name}
      </option>
    );
  });

  return (
    <div
      className={isActive ? `${style.modal} ${style.active}` : `${style.modal}`}
      onClick={() => onActiveClick()}
    >
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal_container}>
          <h1 className={style.modal_h1}>{t("order.header")}</h1>
          <span className={style.closeBtn}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"
              className={style.modal_img}
              onClick={() => onActiveClick()}
            ></img>
          </span>

          <form className={style.modal_form} onSubmit={handleSubmit()}>
            <p>{t("order.name")}</p>
            <input
              name="name"
              className={style.modal_input}
              {...register("name", {
                required: `${t("adminPopup.emptyField")}`,
              })}
            ></input>
            <p>{t("order.email")}</p>
            <input
              name="email"
              className={style.modal_input}
              {...register("email", {
                required: `${t("adminPopup.emptyField")}`,
                pattern: {
                  value:
                    /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
                  message: `${t("adminPopup.vrongFormat")}`,
                },
              })}
            ></input>
            <p>{t("order.repearType")}</p>
            <select {...register("size")} className={style.select}>
              <option selected value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <p>{t("order.town")}</p>
            <select {...register("town")} className={style.select}>
              {townListItem}
            </select>
            <p>{t("order.date")}</p>
            <input type="date" className={style.date}></input>
            <p>{t("order.time")}</p>
            <select {...register("hour")} className={style.select}>
              <option selected value="1">
                01:00
              </option>
              <option value="2">02:00</option>
              <option value="3">03:00</option>
              <option value="4">04:00</option>
              <option value="5">05:00</option>
              <option value="6">06:00</option>
              <option value="7">07:00</option>
              <option value="8">08:00</option>
              <option value="9">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
              <option value="24">00:00</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
