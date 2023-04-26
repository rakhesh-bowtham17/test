import React from 'react';
import style from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
function Button({ color, size, shape, label, iconName, click }) {
  function renderIcon() {
    if (iconName) {
      const faIconName = `fa${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}`;
      // create the FontAwesome icon name by concatenating "fa" with the capitalized iconName
      const faIcon = SolidIcons[faIconName];
      // get the FontAwesome icon object from the SolidIcons object using the faIconName.
      return <FontAwesomeIcon icon={faIcon} />;
    }
    else {
      return null;
    }
  }
  return (
    <button className={`${style[color]} ${style[`button-${size}`]} ${style[`border-${shape}`]} ${style.button}`} onClick={click}>
      {label}
      {iconName ? <span style={{ paddingLeft: '5rem' }}>{renderIcon()}</span> : null}
    </button>
  );
}
export default Button;
