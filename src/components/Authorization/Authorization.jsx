import React from "react";
import s from "./Authorization.module.scss";
import Input from "../Input/Input";
import Inputlogin from "../Input-login/Inputlogin";
import Btn from "../Btn/Btn";

export default function Authorization() {
  return (
    <form className={s.registrationform}>
      <h2 className={s.registrationformtitle}>Авторизация</h2>
      <Inputlogin />
      <Input />
      <Btn />
    </form>
  );
}
