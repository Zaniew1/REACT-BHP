import React from 'react'
import { Link } from '../atoms/Link'
import { Sun, Bell, SquareDashed, Settings } from 'lucide-react';

export const SettingsBar = ():React.JSX.Element => {
  return (
    <div className="settings">
      <Link linkHref={"/"} linkClass={"settings_link"} ><Sun/></Link>
      <Link linkHref={"/"} linkClass={"settings_link"} ><Bell/></Link>
      <Link linkHref={"/"} linkClass={"settings_link"} ><SquareDashed/></Link>
      <Link linkHref={"/"} linkClass={"settings_link"} ><Settings /></Link>

    </div>
  )
}
