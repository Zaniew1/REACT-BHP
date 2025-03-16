import React from 'react';
export const Logo = (): React.JSX.Element => {
  return (
    <a className="logo" href="/">
      <img loading="eager" alt="Logo firmy" className="logo__icon" src="./../public/bhp.png" />
    </a>
  );
};
