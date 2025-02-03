import React from 'react'
import { Logo } from '../atoms/Logo'
import { Settings } from "../molecules/Settings"

export const Header = ():React.JSX.Element => {
  return (
    <header className="header">
        <Logo/>
        <Settings/>
    </header>
  )
}
