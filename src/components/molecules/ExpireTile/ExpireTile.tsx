import { CSSProperties, ReactNode } from 'react'
import { Icon } from '../../atoms/Icon/Icon'
import { Link } from '../../atoms/Link/Link'
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
type ExpireTileType = {
  style?: CSSProperties;
  icon: ReactNode
  iconColor: "icon--red" | "icon--gray" | "icon--yellow" | "icon--green" | "icon--blue";
  quantity: number;
  linkHref?: string;
  linkText?: string;
  text: string
}

export const ExpireTile = (props: ExpireTileType) => {
  return (
    <div style={props.style} className="expire">
      <div className="expire__icon">
        <Icon class={props.iconColor}>{props.icon}</Icon>
        <span >{props.quantity}</span>
      </div>
      <Link style={{fontSize: '20px', margin:'1rem 0 0.5rem 0'}} href={props.linkHref}>{props.linkText}</Link>
      <Paragraph style={{padding: '0 0 1rem 0',  fontSize:'24px', color: '#cbcbe2'}} text={props.text}></Paragraph>
    </div>
  )
}
