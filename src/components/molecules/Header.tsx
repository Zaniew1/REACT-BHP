import React from 'react'
import { Logo } from '../atoms/Logo'
import { SettingsBar } from "../molecules/Settings"

export const Header = ():React.JSX.Element => {
  return (
    <header className="header">
        <Logo/>
        <SettingsBar/>
    </header>
  )
}
