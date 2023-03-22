import React from 'react'
import { Link } from 'react-router-dom'
import navbar from './../../build/navbar.jpg'

const Navbar: React.FC = () => {
  const myStyle = {
    backgroundImage: navbar,
    width: '100%',
    height: '200px',
  }

  return (
    <div style={myStyle}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
