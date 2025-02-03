import React from 'react'
import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon'
export const Settings = ():React.JSX.Element => {
  return (
    <div>
      <Button buttonClass='button-setting' buttonClick={()=>{}}><Icon iconClass='icon-setting' iconSrc={['far', 'sun']}/></Button>
      <Button buttonClass='button-setting' buttonClick={()=>{}}><Icon iconClass='icon-setting' iconSrc={['far', 'sun']}/></Button>
      <Button buttonClass='button-setting' buttonClick={()=>{}}><Icon iconClass='icon-setting' iconSrc={['far', 'sun']}/></Button>
    </div>
  )
}
