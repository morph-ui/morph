import React from 'react';
import RouterMain from '../router/main';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import packageJson from '../../package.json';

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
          <div className="element right">
            <a className="button green rounded"
              href={`https://morph.pe/zip/morph-${ packageJson.version }.zip`} download>
              Descargar v{packageJson.version}
            </a>
          </div>
          <div className="element right">
            <a className="button black rounded"
              href="https://github.com/techfano/morph"
              target="_blank">
              Github
            </a>
          </div>
        </header>
        </div>
      </Router>
    )
  }
}
