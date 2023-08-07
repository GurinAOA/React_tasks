import React from 'react'
import s from './Inputlogin.module.scss'
export default function Inputlogin() {
  return (
    <input
            className={s.registrationformlogin}
            type="text"
            placeholder="Логин"
          />
  )
}
