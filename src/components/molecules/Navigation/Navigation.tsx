import React, { useEffect, useState } from 'react';
import { Building2, UsersRound, GraduationCap } from 'lucide-react';
import { Link } from '../../atoms/Link/Link';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { useLocation } from 'react-router-dom';

export const Navigation = (): React.JSX.Element => {
  const [linkActive, setLinkActive] = useState<number>(0)
  const pathname = useLocation().pathname;
  
  useEffect(() => {
    if (pathname.includes('/firmy')) {
      setLinkActive(1);
    } else if (pathname.includes('/pracownicy')) {
      setLinkActive(2);
    } else if (pathname.includes('/szkolenia')) {
      setLinkActive(3);
    } else {
      setLinkActive(0);
    }
  }, [pathname]);
  return (
    <div className={'navigation'}>
      <Link href={'/123'} class={`navigation__link ${linkActive === 1 ? 'navigation--active' : ''}`}>
        <Building2 />
        <Paragraph class={'navigation_paragraph '} text={'Firmy2'} />
      </Link>
      <Link href={'/pracownicy'} class={`navigation__link  ${linkActive === 2 ? 'navigation--active' : ''}`}>
        <UsersRound />
        <Paragraph class={'navigation_paragraph'} text={'Pracownicy'} />
      </Link>
      <Link href={'/szkolenia'} class={`navigation__link ${linkActive === 3 ? 'navigation--active' : ''}`}>
        <GraduationCap />
        <Paragraph class={'navigation_paragraph'} text={'Szkolenia'} />
      </Link>
    </div>
  );
};
