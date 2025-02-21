import React from 'react'
import { Logo } from '../../atoms/Logo'
import { Paragraph } from '../../atoms/Paragraph'
import { InputText } from '../../molecules/Input/TextPassEmail/InputText'

const Login = ():React.JSX.Element => {
  return (
    <div className={"auth"}>
      <div className={"auth__logo"}>
        <Logo/>
      </div>
      <Paragraph paragraphText={'Logowanie'} paragraphClass={'auth__header'}/>
      <Paragraph paragraphText={'Zaloguj się na swoje konto'} paragraphClass={'auth__header__secondary'}/>
      <form id="form_user"       >
        <InputText value={()=>{}} inputClass={"auth__input"} id='authEmail' type={'email'} labelText={"ADRES E-MAIL"} required={true} minLength={5} maxLength={50}/>
        <InputText value={()=>{}} inputClass={"auth__input"} id='authPassword' type={'password'} labelText={"HASŁO"} required={true} minLength={8} maxLength={30}/>
      </form>
    </div>
  )
}

export default Login
