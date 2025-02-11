import React from 'react'

type IconPropsType= {
    iconClass:string,
    children?:React.ReactNode

}
export const Icon = (props: IconPropsType):React.JSX.Element => {
  return (
    <div className={props.iconClass}>{props.children}</div>
  )
}
