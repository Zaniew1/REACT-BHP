import React from 'react'
import { Sun, Bell, SquareDashed, Settings } from 'lucide-react';
import { Button } from '../atoms/Button';
export const SettingsBar = ():React.JSX.Element => {

  const handleDarkMode = () =>{console.log('darkmode')}
  const handleNotifications = () =>{console.log('notifications')}
  const handleFullScreen = () =>{console.log('fullscreen')}
  const handleSettings = () =>{console.log('settings')}

  return (
    <div className="settings">
      <Button buttonClick={handleDarkMode} buttonClass={"settings_button"} ><Sun/></Button>
      <Button buttonClick={handleNotifications} buttonClass={"settings_button"} ><Bell/></Button>
      <Button buttonClick={handleFullScreen} buttonClass={"settings_button"} ><SquareDashed/></Button>
      <Button buttonClick={handleSettings} buttonClass={"settings_button"} ><Settings /></Button>

    </div>
  )
}
