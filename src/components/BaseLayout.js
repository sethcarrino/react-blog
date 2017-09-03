import React, { Component } from 'react';
import '../styles/App.css';

import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <nav>
          <div>
            <div className="nav-bar-main">
              <ul className="navbar">
                <li className="nav-link">
                  <NavLink to="/" activeClassName="selected" className="logo">Le' Blog</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/create" activeClassName="selected" className="navlink">Create Post</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/show" activeClassName="selected" className="navlink">Show All Posts</NavLink>
                </li>
              </ul>
            </div>
          </div>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
