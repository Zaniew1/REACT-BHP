import React from 'react'
import { LinkIcon } from './LinkIcon'
export const Navigation = ():React.JSX.Element => {
  return (
    <div className={'navigation'}>
      <LinkIcon iconSrc={["far", "building"]} iconClass={"icon"} linkHref={"/"} linkClass={"link"} linkText={'Firmy'}/>
      <LinkIcon iconSrc={["far", "user"]} iconClass={"icon"} linkHref={"/"} linkClass={"link"} linkText={'Pracownicy'}/>
      <LinkIcon iconSrc={["fas", "graduation-cap"]} iconClass={"icon"} linkHref={"/"} linkClass={"link"} linkText={'Szkolenia'}/>
    </div>
  )
}
