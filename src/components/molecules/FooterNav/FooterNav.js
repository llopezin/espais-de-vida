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
        <a
          className={style.link}
          href='mailto:espaciosdevidavalencia@gmail.com'
        >
          <EmailIcon />
          <span>espaciosdevidavalencia@gmail.com</span>
        </a>
      </li>

      <li>
        <a className={style.link} href='https://wa.me/34605506068'>
          <WhatsappIcon />
          <span>Contacta en Whatsapp</span>
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

      <li className={style.phone}>
        <a className={style.link} href='tel:663477006'>
          <PhoneIcon />
          <div>
            <span>663477006</span>
            <span className={style.small}>(de 10:0 a 13:30)</span>
          </div>
        </a>
      </li>

      <li className={style.phone}>
        <a className={style.link} href='tel:605506068'>
          <PhoneIcon />
          <div>
            <span>605506068</span>
            <span className={style.small}>(desde las 17:30)</span>
          </div>
        </a>
      </li>
    </ul>
  )
}

export default FooterNav
