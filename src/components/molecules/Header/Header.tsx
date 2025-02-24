import React from 'react';
import { Logo } from '../../atoms/Logo/Logo';
import { SettingsBar } from '../Settings/Settings';

export const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      <Logo />
      <SettingsBar />
    </header>
  );
};
