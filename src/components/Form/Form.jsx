import React from "react";
import logoImg from "../../images/Logo.png";
import s from "./Form.module.scss";
import Authorization from "../Authorization/Authorization";
// import Registration from "../Registration/Registration";

export default function Form() {
  return (
    <>
      <div className={s.registration}>
        <div className={s.container}>
          <img src={logoImg} alt="logo" className={s.registration_logo} />
          <Authorization/>
          {/* <Registration/> */}
          <div className={s.registration_enter_wrap}>
            <span className={s.registration_enter_black}>
              Уже зарегистрированы?&nbsp;
            </span>
            <a href="a" className={s.registration_enter}>
              Войти
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
