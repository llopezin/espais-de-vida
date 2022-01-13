import React from 'react'
import * as style from './SideContainer.module.scss'

const SideContainer = ({ children, device }) => {
  const deviceClasses = { mobile: 'mobileOnly' }
  return (
    <div className={`${style.sideContainer} ${deviceClasses[device]}`}>
      {children}
    </div>
  )
}

export default SideContainer
