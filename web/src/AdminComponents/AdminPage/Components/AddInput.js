import React from "react";
import Input from "@material-ui/core/Input";
import style from "../AdminPage.module.css";

export default function AddInput(props) {
  return (
    <div className={style.input}>
      <Input
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "description" }}
      />
    </div>
  );
}
