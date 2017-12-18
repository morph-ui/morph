import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Nav from '../component/nav';
import Button from '../page/button';
import Input from '../page/input';
import Grid from '../page/grid';
import Table from '../page/table';
import Header from '../page/header';
import First from '../page/first';
import NavPage from '../page/nav';

const navMenu = [
  {
    url: '/componentes/primer-paso',
    name: 'Primeros pasos'
  },
  {
    url: '/componentes/grid',
    name: 'Grilla'
  },
  {
    url: '/componentes/table',
    name: 'Tabla'
  },
  {
    url: '/componentes/button',
    name: 'Boton'
  },
  {
    url: '/componentes/input',
    name: 'Caja de texto'
  },
  {
    url: '/componentes/header',
    name: 'Cabecera'
  },
  {
    url: '/componentes/nav',
    name: 'Navegación'
  }
]


export default class Component extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="two columns padding-5">
            <Nav position="fixed"
              options={ navMenu }/>
          </div>
          <div className="ten no-margin columns padding-5">
            <Redirect to="/componentes/primer-paso"/>
            <Route exact path={`${this.props.match.url}/primer-paso`} component={First} />
            <Route path={`${this.props.match.url}/grid`} component={Grid} />
            <Route path={`${this.props.match.url}/table`} component={Table} />
            <Route path={`${this.props.match.url}/button`} component={Button} />
            <Route path={`${this.props.match.url}/input`} component={Input} />
            <Route path={`${this.props.match.url}/header`} component={Header} />
            <Route path={`${this.props.match.url}/nav`} component={NavPage} />
          </div>
        </div>
      </div>
    )
  }
}
