import { Icon } from '../../atoms/Icon/Icon';
import { Link } from '../../atoms/Link/Link';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

type TileType = {
  icon?: React.ReactNode;
  iconColor?: 'red' | 'gray' | 'blue' | 'green' | 'yellow';
  link: boolean;
  linkHref?: string;
  text: string;
  quantity?: number;
  style?: React.CSSProperties;
};
export const Tile = (props: TileType) => {
  return (
    <div style={props.style} className="tile">
      <Icon style={{ marginBottom: '1rem' }} class={`icon--${props.iconColor}`}>
        {props.icon}
      </Icon>
      {props.link && (
        <Link
          style={{ width: '10rem', textAlign: 'center', fontSize: '1.4rem' }}
          href={props.linkHref}
        >
          {props.text}
        </Link>
      )}
      {!props.link && (
        <Paragraph
          style={{ width: '10rem', textAlign: 'center', fontSize: '1.4rem' }}
          text={props.text}
        ></Paragraph>
      )}

      <div className="tile__quantity">{props.quantity}</div>
    </div>
  );
};
