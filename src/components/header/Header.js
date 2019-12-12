import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    const menuItems = [ 'New Recipe', 'Home', 'About', 'Contact Us' ]

    return (
      <div className="nav-header">
        <span className="nav-title">
          <p>Recipe App</p>
        </span>
        <span className="nav-menu">
          {menuItems.map((item, idx) => (
            <button type='button' className="nav-item" key={idx * Math.random() + 1}>{item}</button>
          ))}
        </span>
      </div>
    );
  }
}

export default Header;
