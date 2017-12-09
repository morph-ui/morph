import React from 'react';
import RouterMain from '../router/main';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
      <Router>
        <div>
        <RouterMain />
        <header className="fixed">
          {/*<div className="action icon menu_black left"></div>

          <ul className="menu left">
              <li>
              <a href="">Button</a>
            </li>
          </ul>*/}
          <div className="brand">
            <Link to="/">
                {this.props.appname}
            </Link>
          </div>
          <NavLink to="/instalacion"
            className="option left"
            activeClassName="selected">
              Instalación
          </NavLink>
          <NavLink to="/componentes"
            className="option left"
            activeClassName="selected">
              Componentes
          </NavLink>
        </header>
        </div>
      </Router>
    )
  }
}
