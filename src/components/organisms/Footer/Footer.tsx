import React from 'react';
import { Link } from '../../atoms/Link/Link';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

const Footer = (): React.JSX.Element => {
  return (
    <div className="foot">
      <div className="footer">
        <Paragraph
          paragraphClass={'footer_restricted'}
          paragraphText={'2025 © Wszelkie prawa zastrzeżone'}
        />
      </div>
      <div className="footer">
        <Link linkHref={'/safety'} linkClass={'footer_link'}>
          <Paragraph paragraphClass={'footer_paragraph'} paragraphText={'Bezpieczeństwo danych'} />
        </Link>
        <Link linkHref={'/protection'} linkClass={'footer_link'}>
          <Paragraph paragraphClass={'footer_paragraph'} paragraphText={'Ochrona danych'} />
        </Link>
        <Link linkHref={'/policy'} linkClass={'footer_link'}>
          <Paragraph paragraphClass={'footer_paragraph'} paragraphText={'Polityka prywatności'} />
        </Link>
        <Link linkHref={'/terms'} linkClass={'footer_link'}>
          <Paragraph paragraphClass={'footer_paragraph'} paragraphText={'Regulamin'} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
