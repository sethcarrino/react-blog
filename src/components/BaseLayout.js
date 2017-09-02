import React, { Component } from 'react';
import '../styles/App.css';

import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <nav>
          <div>
            <div className="nav-bar-main">
              <ul className="navbar-nav">
                <li className="nav-link">
                  <NavLink to="/" activeClassName="selected">Le' Blog</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/create" activeClassName="selected">Create Post</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/show" activeClassName="selected">Show All Posts</NavLink>
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
