/* eslint-disable */
import React from "react" 
import PropTypes from "prop-types"
import { Link } from "gatsby"
import linkedin from '../images/linkedin.png'
import github from '../images/github.jpg'
import MobileMenu from './mobilemenu'

const Header = () => (
  <header>
    <MobileMenu />
    <nav className="desktop-nav">
      <Link to="/" className='navItem'>Home</Link>
      <Link to="/about" className='navItem'>About</Link>
      <Link to="/contact" className='navItem'>Contact</Link>
    </nav>
      <a href='https://www.linkedin.com/in/samuil-ilkov-7b963b10b/' className="social-icon" target="__blank"><img className="social-img" src={linkedin} /></a>
      <a href="https://github.com/ilkovs" className="social-icon social-icon-two" target="__blank"><img className="social-img" src={github} /></a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
