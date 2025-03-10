import React from 'react';
import { Building2, UsersRound, GraduationCap } from 'lucide-react';
import { Link } from '../../atoms/Link/Link';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

export const Navigation = (): React.JSX.Element => {
  return (
    <div className={'navigation'}>
      <Link href={'/firmy'} class={'navigation_link'}>
        <Building2 />
        <Paragraph class={'navigation_paragraph'} text={'Firmy'} />
      </Link>
      <Link href={'/pracownicy'} class={'navigation_link'}>
        <UsersRound />
        <Paragraph class={'navigation_paragraph'} text={'Pracownicy'} />
      </Link>
      <Link href={'/szkolenia'} class={'navigation_link'}>
        <GraduationCap />
        <Paragraph class={'navigation_paragraph'} text={'Szkolenia'} />
      </Link>
    </div>
  );
};
