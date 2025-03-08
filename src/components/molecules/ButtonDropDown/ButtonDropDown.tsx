import { CSSProperties, SyntheticEvent, useEffect, useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { ChevronDown } from 'lucide-react';
type ButtonDropDownType = {
  id?: string;
  buttonIcon?: React.ReactNode | string;
  buttonText?: string;
  buttonClass?: 'button--gray' | 'button--blue' | 'button--red' | 'button--none';
  dropDownChildren?: React.ReactNode;
  buttonStyle?: CSSProperties;
  dropDownStyle?: CSSProperties;
  showArrow?: boolean;
};

export const ButtonDropDown = (props: ButtonDropDownType) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const toggleDropdown = (e: SyntheticEvent) => {
    e.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  const closeDropdown = () => {
    setShowDropDown(false);
  };
  useEffect(() => {
    if (showDropDown) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => document.removeEventListener('click', closeDropdown);
  }, [showDropDown]);
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={'dropdown'}>
      <Button
        class={props.buttonClass ?? 'button--gray'}
        style={props.buttonStyle}
        onClick={toggleDropdown}
      >
        {props.buttonIcon} {props.buttonText} {props.showArrow ? <ChevronDown size={18} /> : ''}
      </Button>
      {showDropDown && (
        <div onClick={handleDropdownClick} style={props.dropDownStyle} className={'dropdown__area'}>
          {props.dropDownChildren}
        </div>
      )}
    </div>
  );
};
