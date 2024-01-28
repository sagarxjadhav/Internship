import React from 'react'
import cssdata from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      
  <div className={cssdata.footer}>
    <div className={cssdata.waves}>
      <div className={cssdata.wave} id="wave1"></div>
      <div className={cssdata.wave} id="wave2"></div>
      <div className={cssdata.wave} id="wave3"></div>
      <div className={cssdata.wave} id="wave4"></div>
    </div>
    <ul className={cssdata.socialicon}>
      <li className={cssdata.socialicon__item}><a className={cssdata.socialicon__link} href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li className={cssdata.socialicon__item}><a className={cssdata.socialicon__link} href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li className={cssdata.socialicon__item}><a className={cssdata.socialicon__link} href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className={cssdata.socialicon__item}><a className={cssdata.socialicon__link} href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul className={cssdata.menu}>
      <li className={cssdata.menu__item}><a className={cssdata.menu__link} href="#">Home</a></li>
      <li className={cssdata.menu__item}><a className={cssdata.menu__link} href="#">About</a></li>
      <li className={cssdata.menu__item}><a className={cssdata.menu__link} href="#">Services</a></li>
      <li className={cssdata.menu__item}><a className={cssdata.menu__link} href="#">Team</a></li>
      <li className={cssdata.menu__item}><a className={cssdata.menu__link} href="#">Contact</a></li>

    </ul>
    <p>&copy;2024 Sagar Jadhav | All Rights Reserved</p>
  </div>
    </>
  )
}

export default Footer
