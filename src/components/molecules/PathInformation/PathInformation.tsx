import { Link } from '../../atoms/Link/Link';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
type PathInformationType = {
  visibleSlash: boolean;
  id?: string;
  linkHref?: string;
  linkText?: string;
  paragraphText?: string;
  style: React.CSSProperties;
};
export const PathInformation = (props: PathInformationType) => {
  return (
    <div style={props.style} className="path">
      {props.linkText && (
        <Link class={'path__link'} href={props.linkHref}>
          {props.linkText}
        </Link>
      )}
      {props.visibleSlash && <span className="path__span">/</span>}
      <Paragraph class={'path__details'} text={props.paragraphText}></Paragraph>
    </div>
  );
};
