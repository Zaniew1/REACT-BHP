import React from 'react'
import { IconProp, library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faUser } from "@fortawesome/free-regular-svg-icons";
library.add(faBuilding);
library.add(faUser);
library.add(faGraduationCap);
export type IconType = {
  iconSrc: IconProp,
  iconClass: string
}
export const Icon = (props:IconType):React.JSX.Element => {
  return (
    <FontAwesomeIcon className={props.iconClass} icon={props.iconSrc} />
  )
}
