import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from '../page/home';
import Button from '../page/button';
import Input from '../page/input';
import Grid from '../page/grid';
import Table from '../page/table';
import Header from '../page/header';

export default class RouterMain extends React.Component {
  render() {
    return (
      <div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/component/button" component={Button} />
            <Route path="/component/input" component={Input} />
            <Route path="/component/grid" component={Grid} />
            <Route path="/component/table" component={Table} />
            <Route path="/component/header" component={Header} />
          </div>
      </div>
    )
  }
}
