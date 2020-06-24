import React from 'react'
import Logo from './Logo';

const menuItems = [
  "Обучающее видео",
  "Оформление заказа",
  "Оплата",
  "Доставка",
  "Гарантия",
  "Возврат",
  "Контакты",
  "Партнерам",
]

const Header = ({ isMenuOpen, setIsMenuOpen }) => (
  <div id="header-top">

    <div className="container">

      <a className="logo" itemProp="url" href="/">
        <Logo />
      </a>

      <div className="topNav">

        <button className="cart" data-rippleeffect="button" data-badge="0">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="toggle-menu">
          {isMenuOpen ? (
            <span className="closeCrosse">
              <svg fill="#fff" height="36" viewBox="0 0 24 24" width="36"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
            </span>
          ) : (
            <span className="sandwich">
              <span className="sw sw-topper"></span>
              <span className="sw sw-bottom"></span>
              <span className="sw sw-footer"></span>
            </span>
          )}
        </button>

      </div>

      {(isMenuOpen) ?
        <div className="topMenuBox">
          {menuItems.map((mi, i) => (
            <div key={i} className={`menuItem`}>
              {mi}
            </div>
          ))}
        </div>
      :
      null
      }

    </div>

  </div>
)

export default Header
