import React from "react";
import s from './input.module.scss';

export default function Input() {
  return (
    <input
      className={s.registration_form_login}
      type="password"
      placeholder="Пароль"
    />
  );
}
