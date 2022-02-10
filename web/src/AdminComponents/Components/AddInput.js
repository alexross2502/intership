import React from "react";
//import style from "../AdminPage.module.css";

export default function AddInput(props) {
  return (
    <div className="">
      <input
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "description" }}
        id={props.id}
      />
    </div>
  );
}
