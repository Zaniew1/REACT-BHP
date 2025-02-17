import React from 'react'
import { Logo } from '../../atoms/Logo'
import { Paragraph } from '../../atoms/Paragraph'
import { InputText } from '../../atoms/InputText'

const Login = ():React.JSX.Element => {
  return (
    <div className={"auth"}>
      <div className={"auth__logo"}>
        <Logo/>
      </div>
      <Paragraph paragraphText={'Logowanie'} paragraphClass={'auth__header'}/>
      <Paragraph paragraphText={'Zaloguj się na swoje konto'} paragraphClass={'auth__header__secondary'}/>
      <form id="form_user"       >
        <InputText inputClass={"auth__input"} inputId='authEmail' inputType={'email'} labelText={"ADRES E-MAIL"} required={true} minLength={5} maxLength={50}/>
        <InputText inputClass={"auth__input"} inputId='authPassword' inputType={'password'} labelText={"HASŁO"} required={true} minLength={8} maxLength={30}/>
      </form>
    </div>
  )
}

export default Login
