import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <h5>Hello I'm</h5>
        <h1>Mihail Dragni</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div className="header__me me">
          <img src={ME} alt="Author image" />
        </div>
      </div>
    </header>
  )
}

export default Header
