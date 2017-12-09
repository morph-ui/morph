import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from '../page/home';
import Installation from '../page/installation';
import Component from '../page/component';

export default class RouterMain extends React.Component {
  render() {
    return (
      <div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/instalacion" component={Installation} />
            <Route path="/componentes" component={Component}/>
          </div>
      </div>
    )
  }
}
