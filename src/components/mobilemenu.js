import React, { Component } from 'react';
import { Link } from "gatsby"
import { elastic as Menu } from 'react-burger-menu'

class MobileMenu extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu id={"sidebar"} className={"my-menu"} disableAutoFocus >
                <Link id="home" className="mobile-item" to="/">Home</Link>
                <Link id="about" className="mobile-item" to="/about">About</Link>
                <Link id="contact" className="mobile-item" to="/contact">Contact</Link>
            </Menu>
        );
    }
}

export default MobileMenu
