import React from 'react'
import "./Navbar.scss"
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src="logo.png" alt="logo" className='navbar_logo_img'/>
      </div>
      <div>Acceuil</div>
      <div>A propos</div>
    </nav>
  )
}

export default Navbar