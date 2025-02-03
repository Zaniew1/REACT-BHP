import React from 'react'
import { Icon, IconType } from '../atoms/Icon'
import { Link, LinkType } from '../atoms/Link'
type LinkIconType = LinkType & IconType
export const LinkIcon = (props: LinkIconType):React.JSX.Element => {
  return (
    <div className="linkIcon"><Icon iconSrc={props.iconSrc} iconClass={props.iconClass}/><Link linkHref={props.linkHref} linkClass={props.linkClass} linkText={props.linkText} linkTarget={props.linkTarget}/></div>
  )
}
