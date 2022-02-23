import React from 'react'
import EmailIcon from '../../atoms/EmailIcon/EmailIcon'
import PhoneIcon from '../../atoms/PhoneIcon/PhoneIcon'
import * as style from './FooterNav.module.scss'
import WhatsappIcon from '../../atoms/WhatsappIcon/WhatsappIcon'
import LinkedInIcon from '../../atoms/LInkedInIcon/LInkedInIcon'

const FooterNav = () => {
  return (
    <ul className={style.list}>
      <li>
        <a className={style.link} href='mailto:nataliaferrus77@gmail.com'>
          <EmailIcon />
          <span>nataliaferrus77@gmail.com</span>
        </a>
      </li>
      <li>
        <a className={style.link} href='https://wa.me/34605506068'>
          <WhatsappIcon />
          <span>Contacta por whatsapp</span>
        </a>
      </li>
      <li>
        <a className={style.link} href='tel:605506068'>
          <PhoneIcon />
          <div className={style.phoneWrap}>
            <span>605506068</span>
            <span className={style.small}>(A partir las 17:30)</span>
          </div>
        </a>
      </li>
      <li>
        <a
          className={style.link}
          href='https://www.linkedin.com/company/espacios-de-vida'
          target='_blank'
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      </li>
    </ul>
  )
}

export default FooterNav
