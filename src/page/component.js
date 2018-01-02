import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Nav from '../component/nav';
import Button from '../page/button';
import Input from '../page/input';
import Grid from '../page/grid';
import Table from '../page/table';
import HeaderPage from '../page/header';
import CardPage from '../page/card';

const navMenu = [
  {
    url: '/componentes/grilla',
    name: 'Grilla'
  },
  {
    url: '/componentes/tabla',
    name: 'Tabla'
  },
  {
    url: '/componentes/boton',
    name: 'Boton'
  },
  {
    url: '/componentes/caja_de_texto',
    name: 'Caja de texto'
  },
  {
    url: '/componentes/cabecera',
    name: 'Cabecera'
  },
  {
    url: '/componentes/tarjeta',
    name: 'Tarjeta'
  }
]


export default class Component extends React.Component {

  processRedirect(){
    if(this.props.location.pathname === this.props.match.url){
      return(
        <Redirect to="/componentes/grilla"/>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>{this.processRedirect()}</div>
          <div className="two columns padding-5">
            <Nav position="fixed"
              options={ navMenu }/>
          </div>
          <div className="ten no-margin columns padding-5">
            <Route path={`${this.props.match.url}/grilla`} component={Grid} />
            <Route path={`${this.props.match.url}/tabla`} component={Table} />
            <Route path={`${this.props.match.url}/boton`} component={Button} />
            <Route path={`${this.props.match.url}/caja_de_texto`} component={Input} />
            <Route path={`${this.props.match.url}/cabecera`} component={HeaderPage} />
            <Route path={`${this.props.match.url}/tarjeta`} component={CardPage} />
          </div>
        </div>
      </div>
    )
  }
}
