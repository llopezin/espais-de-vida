import React from 'react'
import * as style from './Button.module.scss'

let Button = ({
  text,
  className,
  label,
  onClick,
  disabled = false,
  children
}) => {
  return (
    <button
      aria-label={label || text}
      className={style[className]}
      onClick={onClick}
      disabled={disabled}
    >
      {text || children}
    </button>
  )
}

export default Button
