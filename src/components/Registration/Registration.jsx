import React from "react";
import s from "./registration.module.scss";
import Input from "../Input/Input";
import Inputlogin from "../Input-login/Inputlogin";
import Btn from "../Btn/Btn";

export default function Registration() {
  return (
    <form className={s.registrationform}>
      <h2 className={s.registrationformtitle}>Регистрация</h2>
      <Inputlogin />
      <Input />
      <Input />
      <Btn />
    </form>
  );
}