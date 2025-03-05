import React from 'react';
import { Link } from '../../atoms/Link/Link';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

const Footer = (): React.JSX.Element => {
  return (
    <div className="foot">
      <div className="footer">
        <Paragraph
          class={'footer_restricted'}
          text={'2025 © Wszelkie prawa zastrzeżone'}
        />
      </div>
      <div className="footer">
        <Link href={'/safety'} class={'footer_link'}>
          <Paragraph class={'footer_paragraph'} text={'Bezpieczeństwo danych'} />
        </Link>
        <Link href={'/protection'} class={'footer_link'}>
          <Paragraph class={'footer_paragraph'} text={'Ochrona danych'} />
        </Link>
        <Link href={'/policy'} class={'footer_link'}>
          <Paragraph class={'footer_paragraph'} text={'Polityka prywatności'} />
        </Link>
        <Link href={'/terms'} class={'footer_link'}>
          <Paragraph class={'footer_paragraph'} text={'Regulamin'} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
