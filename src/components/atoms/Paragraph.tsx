import React from 'react'
type ParagraphType = {
    text:string,
    class:string
}
export const Paragraph = (props: ParagraphType):React.JSX.Element => {
  return (
    <p className={props.class}>{props.text}</p>
  )
}
