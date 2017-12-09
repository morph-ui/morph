import React from 'react';
import RouterMain from '../router/main';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

  render() {
    return (
      <div>
      <div className="row">
        <div className="two columns padding-5">
          <nav className={`${ this.props.position  }`}>
            <NavLink to="/componentes/button"
              className="option left"
              activeClassName="selected">
                Boton
            </NavLink>
            <NavLink to="/componentes/input"
              className="option left"
              activeClassName="selected">
                Caja de texto
            </NavLink>
            <NavLink to="/componentes/grid"
              className="option left"
              activeClassName="selected">
                Grilla
            </NavLink>
            <NavLink to="/componentes/table"
              className="option left"
              activeClassName="selected">
                Tabla
            </NavLink>
            <NavLink to="/componentes/header"
              className="option left"
              activeClassName="selected">
                Cabecera
            </NavLink>
          </nav>
        </div>
        <div className="ten no-margin columns padding-5">

        </div>
      </div>
      </div>
    )
  }
}
