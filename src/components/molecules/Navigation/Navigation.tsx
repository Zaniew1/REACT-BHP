import React from 'react';
import { Building2, UsersRound, GraduationCap } from 'lucide-react';
import { Link } from '../../atoms/Link/Link';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

export const Navigation = (): React.JSX.Element => {
  return (
    <div className={'navigation'}>
      <Link linkHref={'/'} linkClass={'navigation_link'}>
        <Building2 />
        <Paragraph paragraphClass={'navigation_paragraph'} paragraphText={'Firmy'} />
      </Link>
      <Link linkHref={'/'} linkClass={'navigation_link'}>
        <UsersRound />
        <Paragraph paragraphClass={'navigation_paragraph'} paragraphText={'Pracownicy'} />
      </Link>
      <Link linkHref={'/'} linkClass={'navigation_link'}>
        <GraduationCap />
        <Paragraph paragraphClass={'navigation_paragraph'} paragraphText={'Szkolenia'} />
      </Link>
    </div>
  );
};
