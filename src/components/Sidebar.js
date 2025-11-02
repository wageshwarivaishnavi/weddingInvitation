import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Varsha <small>&</small> Vikas
            </span>
            <h6>04.03.2025 & 05.03.2025 </h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#organization'>Vivaha Vaibhavam</a>
            </li>
      
            <li>
              <a href='#story'>Invitation</a>
            </li>
            <li>
              <a href='#whenwhere'>When & Where</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Varsha & Vikas wedding
            <br />
            04,05 March 2025
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
