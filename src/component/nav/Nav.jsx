import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className="Navcontainer">
        <div className="logo">Ajay Tamilselvan</div>
        <ul className='NavList'>
          <li className="NavLinks"><Link to="/todo">To-Do list</Link></li>
          <li className="NavLinks"><Link to="/xogame">X-O game</Link></li>
          <li className="NavLinks"><Link to="/weather">Weather</Link></li>
        </ul>
      </div>
      <div className="backgroundImgNav"><img src="https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
    </div>
  )
}

export default Nav