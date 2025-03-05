import React from 'react';
import { Sun, Bell, SquareDashed, Settings } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';
export const SettingsBar = (): React.JSX.Element => {
  const handleDarkMode = () => {
    console.log('darkmode');
  };
  const handleNotifications = () => {
    console.log('notifications');
  };
  const handleFullScreen = () => {
    console.log('fullscreen');
  };
  const handleSettings = () => {
    console.log('settings');
  };

  return (
    <div className="settings">
      <Button onClick={handleDarkMode}>
        <Sun />
      </Button>
      <Button onClick={handleNotifications}>
        <Bell />
      </Button>
      <Button onClick={handleFullScreen}>
        <SquareDashed />
      </Button>
      <Button onClick={handleSettings}>
        <Settings />
      </Button>
    </div>
  );
};
